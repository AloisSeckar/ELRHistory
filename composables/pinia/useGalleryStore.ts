import type { StoreData } from '@/composables/usePiniaHelpers'
import type { Gallery } from '@/database/types'

const tableName = 'elrhGallery'

export const useGalleryStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Gallery[]
    } as StoreData
  },
  actions: {
    async init () {
      await useStoreInit({
        supabaseClient: useSupabaseClient(),
        tableName,
        storeData: this,
        selectQuery: 'galleryId, dateCreated, name, dscr, elrhAuthor(authorId, name), parentId(galleryId, name), elrhArticle(articleId, name, elrhAuthor(authorId, name), galleryId)',
        orderQuery: 'name',
        orderOpts: {}
      })
    }
  },
  getters: {
    getItems: state => get(state),
    getCount: state => get(state).length,
    getById: (state) => {
      return (galleryId: number) => get(state).find(i => i.galleryId === galleryId) || { galleryId: 0 } as Gallery
    },
    getByParent: (state) => {
      return (parentId?: number) => get(state).filter(i => i.parentId?.galleryId === parentId) || [] as Gallery[]
    }
  }
})

function get (state: StoreData) {
  return getStoreItems<Gallery>(state)
}
