import { SupabaseClient } from '@supabase/supabase-js'
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
      await fillStore(tableName, this, getItems)
    }
  },
  getters: {
    getItems: state => state.items,
    getCount: state => state.items.length,
    getById: (state) => {
      return (galleryId: number) => state.items.find(i => i.galleryId === galleryId)
    },
    getByParent: (state) => {
      return (parentId?: number) => state.items.filter(i => i.parentId?.galleryId === parentId)
    }
  }
})

async function getItems (supabase: SupabaseClient) {
  const query = `galleryId, dateCreated, name, dscr, elrhAuthor(authorId, name), parentId(galleryId, name), 
  elrhArticle(articleId, name, authorId(authorId, name), galleryId)`
  return await fetchSupabase(supabase, tableName, query, 'name', {})
}
