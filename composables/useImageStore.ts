import { StoreData } from './storeHelpers'
import { Image } from '@/database/types'

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
    async fill () {
      await fillStore({
        supabaseClient: useSupabaseClient(),
        tableName,
        storeData: this,
        selectQuery: 'imageId, dateCreated, name, dscr, elrhAuthor(authorId, name), image, galleryId(galleryId, name), ord, prevId, nextId',
        orderQuery: 'ord',
        orderOpts: {}
      })
    }
  },
  getters: {
    getItems: state => (state.items || []) as Image[],
    getCount: state => state.items?.length || 0,
    getById: (state) => {
      return (imageId: number) => getStoreItems<Image>(state).find(i => i.imageId === imageId) || { imageId: 0 } as Image
    },
    getByGallery: (state) => {
      return (galleryId: number, limit?: number) => getStoreItems<Image>(state).filter(i => i.galleryId?.galleryId === galleryId)?.slice(0, limit) || [] as Image[]
    },
    getCountByGallery: (state) => {
      return (galleryId: number) => getStoreItems<Image>(state).filter(i => i.galleryId?.galleryId === galleryId).length || 0
    }
  }
})
