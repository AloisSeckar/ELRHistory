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
        selectQuery: 'imageId, dateCreated, name, dscr, elrhAuthor(authorId, name), image, galleryId(galleryId, name), ord, prevId, nextId',
        orderQuery: 'ord',
        orderOpts: {}
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
    }
  },
  getters: {
    getItems: state => get(state),
    getCount: state => get(state).length,
    getById: (state) => {
      return (imageId: number) => get(state).find(i => i.imageId === imageId) || { imageId: 0 } as Image
    },
    getByGallery: (state) => {
      return (galleryId: number, limit?: number) => get(state).filter(i => i.galleryId?.galleryId === galleryId)?.slice(0, limit) || [] as Image[]
    },
    getCountByGallery: (state) => {
      return (galleryId: number) => get(state).filter(i => i.galleryId?.galleryId === galleryId).length || 0
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
    }
  }
})

function get (state: StoreData) {
  return getStoreItems<Image>(state)
}

function treatInput (input: ImageDB) {
  input.dateEdited = new Date().toISOString()
  if (input.dateCreated === undefined) {
    input.dateCreated = new Date().toISOString()
  }
  input.ord = 1 // TODO allow proper ordering
}
