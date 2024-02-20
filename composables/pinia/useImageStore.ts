import type { StoreData } from '@/composables/usePiniaHelpers'
import type { Image, ImageDB } from '@/database/types'

const tableName = 'elrhImage'

export const useImageStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Image[]
    } as StoreData
  },
  actions: {
    async init (force?: boolean) {
      await useStoreInit({
        supabaseClient: useSupabaseClient(),
        tableName,
        storeData: this,
        selectQuery: 'imageId, dateCreated, name, dscr, authorId, elrhAuthor(authorId, name), image, galleryId, elrhGallery(galleryId, name), ord',
        orderQuery: 'ord',
        preventSingleLetterOrphans: ['dscr']
      }, force)
    },
    async update (itemData: ImageDB, itemId?: number): Promise<boolean> {
      treatInput(itemData)

      const config: UpdateConfig = {
        supabaseClient: useSupabaseClient<ImageDB>(),
        tableName,
        itemKey: 'imageId',
        itemId,
        itemData
      }

      console.log(itemData)

      let ret: boolean
      if (itemId) {
        ret = await useDBUpdate(config)
      } else {
        ret = await useDBCreate(config)
      }

      if (ret) {
        this.init(true) // TODO can we just load the new one?
      }

      return ret
    },
    async moveBackwards (imageId: number) {
      if (!useLoginStore().user) {
        throw new Error('Unautorhized')
      }

      const currentImage = this.getById(imageId)
      if (!currentImage) {
        throw new Error(`Invalid image id ${imageId}`)
      }

      const prevId = this.getPrev(imageId)
      const previousImage = this.getById(prevId || -1)
      if (!previousImage) {
        throw new Error(`Image id ${imageId} is already first`)
      }

      currentImage.ord--
      await this.update(toImageDB(currentImage), imageId)
      previousImage.ord++
      await this.update(toImageDB(previousImage), prevId)

      this.init(true) // TODO can we just load the new one?
      useModalStore().showModal('Image moved', `Image ID ${imageId} was successfully moved backwards`)
    },
    async moveForwards (imageId: number) {
      if (!useLoginStore().user) {
        throw new Error('Unautorhized')
      }

      const currentImage = this.getById(imageId)
      if (!currentImage) {
        throw new Error(`Invalid image id ${imageId}`)
      }

      const nextId = this.getNext(imageId)
      const nextImage = this.getById(nextId || -1)
      if (!nextImage) {
        throw new Error(`Image id ${imageId} is already last`)
      }

      currentImage.ord++
      await this.update(toImageDB(currentImage), imageId)
      nextImage.ord--
      await this.update(toImageDB(nextImage), nextId)

      this.init(true) // TODO can we just load the new one?
      useModalStore().showModal('Image moved', `Image ID ${imageId} was successfully moved forwards`)
    }
  },
  getters: {
    getItems: state => get(state),
    getCount: state => get(state).length,
    getById: (state) => {
      return (imageId: number) => get(state).find(i => i.imageId === imageId) || { imageId: 0 } as Image
    },
    getByGallery: (state) => {
      return (galleryId: number, limit?: number) => get(state).filter(i => i.elrhGallery?.galleryId === galleryId)?.slice(0, limit) || [] as Image[]
    },
    getCountByGallery: (state) => {
      return (galleryId: number) => get(state).filter(i => i.elrhGallery?.galleryId === galleryId).length || 0
    },
    getEmpty: () => {
      const newImage: ImageDB = {
        dateCreated: new Date().toISOString(),
        dateEdited: new Date().toISOString(),
        name: '',
        dscr: '',
        authorId: 0,
        image: '',
        galleryId: 0,
        ord: 0
      }
      return newImage
    },
    getFirstId: (state) => {
      return get(state).at(0)?.imageId || 0
    },
    getPrev: (state) => {
      return (imageId: number) => {
        const images = get(state)
        const currentImage = images.find(i => i.imageId === imageId)
        if (currentImage?.ord && currentImage.ord > 1) {
          const prevImage = images.find(i => i.galleryId === currentImage.galleryId && i.ord === currentImage.ord - 1)
          return prevImage?.imageId
        } else {
          return undefined
        }
      }
    },
    getNext: (state) => {
      return (imageId: number) => {
        const images = get(state)
        const currentImage = images.find(i => i.imageId === imageId)
        if (currentImage?.ord) {
          const nextImage = images.find(i => i.galleryId === currentImage.galleryId && i.ord === currentImage.ord + 1)
          return nextImage?.imageId
        } else {
          return undefined
        }
      }
    }
  }
})

function get (state: StoreData) {
  return getStoreItems<Image>(state)
}

async function treatInput (input: ImageDB) {
  input.dateEdited = new Date().toISOString()
  if (input.dateCreated === undefined) {
    input.dateCreated = new Date().toISOString()
  }
  if (!input.ord) {
    input.ord = await getNewImageOrd(input.galleryId)
  }
}

function toImageDB (input: Image) {
  return {
    dateCreated: input.dateCreated,
    dateEdited: input.dateEdited,
    name: input.name,
    dscr: input.dscr,
    authorId: input.authorId,
    image: input.image,
    galleryId: input.galleryId,
    ord: input.ord
  }
}

async function getNewImageOrd (galleryId: number) {
  const { count, error } = await useSupabaseClient()
    .from('elrhImage')
    .select('*', { count: 'exact', head: true })
    .eq('galleryId', galleryId)
  if (count) {
    return count + 1
  } else {
    console.error(error)
    return 1
  }
}
