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
    getById: (state) => {
      return (gallery_id: Number) => state.items.find(i => i.gallery_id == gallery_id)
    }
  },
})

async function getItems(supabase: any) {
  const query = `gallery_id, date_created, name, dscr, elrh_author(author_id, name), elrh_gallery(parent_id, name)`
  return fetchSupabase(supabase, tableName, query, 'date_created', {ascending: false})
}

type GalleryResponse = Awaited<ReturnType<typeof getItems>>
export type Gallery = GalleryResponse['data']
