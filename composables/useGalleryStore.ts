import { Gallery } from '@/database/types'

const tableName = 'elrhGallery'

export const useGalleryStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Gallery[]
    }
  },
  actions: {
    async fill () {
      await fillStore({
        supabaseClient: useSupabaseClient(),
        tableName,
        storeData: this,
        selectQuery: 'galleryId, dateCreated, name, dscr, elrhAuthor(authorId, name), parentId(galleryId, name), elrhArticle(articleId, name, authorId(authorId, name), galleryId)',
        orderQuery: 'name',
        orderOpts: {}
      })
    }
  },
  getters: {
    getItems: state => state.items || [] as Gallery[],
    getCount: state => state.items?.length || 0,
    getById: (state) => {
      return (galleryId: number) => state.items?.find((i: Gallery) => i.galleryId === galleryId) || { galleryId: 0 } as Gallery
    },
    getByParent: (state) => {
      return (parentId?: number) => state.items?.filter((i: Gallery) => i.parentId?.galleryId === parentId) || [] as Gallery[]
    }
  }
})
