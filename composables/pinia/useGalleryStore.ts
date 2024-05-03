import type { StoreData } from '@/composables/usePiniaHelpers'
import type { Gallery, GalleryDB, SupabaseUpdateData } from '@/database/types'

const tableName = 'elrhGallery'

export const useGalleryStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Gallery[],
    } as StoreData
  },
  actions: {
    async init(forceReload?: boolean) {
      await useStoreInit({
        supabaseClient: useSupabaseClient(),
        tableName,
        storeData: this,
        selectQuery: 'galleryId, dateCreated, name, dscr, elrhAuthor(authorId, name), parentId(galleryId, name), elrhArticle(articleId, name, elrhAuthor(authorId, name), galleryId)',
        orderQuery: 'name',
        preventSingleLetterOrphans: ['name', 'dscr'],
      }, forceReload)
    },
    async update(itemData: SupabaseUpdateData, itemId?: number): Promise<boolean> {
      treatInput(itemData as GalleryDB)

      const config: UpdateConfig = {
        supabaseClient: useSupabaseClient<GalleryDB>(),
        tableName,
        itemKey: 'galleryId',
        itemId,
        itemData,
      }

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
  },
  getters: {
    getItems: state => get(state),
    getCount: state => get(state).length,
    getById: (state) => {
      return (galleryId: number) => get(state).find(i => i.galleryId === galleryId) || { galleryId: 0 } as Gallery
    },
    getByParent: (state) => {
      return (parentId?: number) => get(state).filter(i => i.parentId?.galleryId === parentId) || [] as Gallery[]
    },
    getEmpty: () => {
      const newGallery: GalleryDB = {
        dateCreated: new Date().toISOString(),
        dateEdited: new Date().toISOString(),
        name: '',
        dscr: '',
        authorId: 0,
      }
      return newGallery
    },
    getGalleryList: (state): FormkitValue[] => {
      const galleries = get(state).map(gallery => ({ value: gallery.galleryId, label: gallery.name }))
      galleries.unshift({ value: -1, label: '' })
      return galleries
    },
    getFirstId: (state) => {
      return get(state).at(0)?.galleryId || 0
    },
  },
})

function get(state: StoreData) {
  return getStoreItems<Gallery>(state)
}

function treatInput(input: GalleryDB) {
  input.dateEdited = new Date().toISOString()
  if (input.dateCreated === undefined) {
    input.dateCreated = new Date().toISOString()
  }
}
