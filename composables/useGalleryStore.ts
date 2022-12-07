import { defineStore } from 'pinia'

const tableName = "elrh_gallery"

export const useGalleryStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Gallery[],
    }
  },
  actions: {
    async fill() {
      fillStore(tableName, this, getItems)
    }
  },
  getters: {
    getItems: state => state.items,
    getCount: state => state.items.length,
    getById: (state) => {
      return (gallery_id: Number) => state.items.find(i => i.gallery_id == gallery_id)
    },
    getByParent: (state) => {
      return (parent_id?: Number) => state.items.filter(i => i.parent_id?.gallery_id == parent_id)
    }
  }
})

async function getItems(supabase: any) {
  const query = `gallery_id, date_created, name, dscr, author_id(author_id, name), parent_id(gallery_id, name), 
  elrh_article(article_id, name, author_id(author_id, name), gallery_id)`
  return fetchSupabase(supabase, tableName, query, 'name', {})
}

type GalleryResponse = Awaited<ReturnType<typeof getItems>>
export type Gallery = GalleryResponse['data']
