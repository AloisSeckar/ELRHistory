import { SupabaseClient } from '@supabase/supabase-js'
import { Image } from '@/database/types'

const tableName = 'elrhImage'

export const useImageStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Image[]
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
      return (imageId: number) => state.items.find(i => i.imageId === imageId)
    },
    getByGallery: (state) => {
      return (galleryId: number, limit?: number) => state.items.filter(i => i.galleryId?.galleryId === galleryId).slice(0, limit)
    },
    getCountByGallery: (state) => {
      return (galleryId: number) => state.items.filter(i => i.galleryId?.galleryId === galleryId).length
    }
  }
})

async function getItems (supabase: SupabaseClient) {
  const query = 'imageId, dateCreated, name, dscr, elrhAuthor(authorId, name), image, galleryId(galleryId, name), ord, prevId, nextId'
  return await fetchSupabase(supabase, tableName, query, 'ord', {})
}
