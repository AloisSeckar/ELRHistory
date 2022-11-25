import { defineStore } from 'pinia'

const tableName = "elrh_book"

export const useBookStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Book[],
    }
  },
  actions: {
    async fill() {
      fillStore(tableName, this, getItems)
    }
  },
  getters: {
    getItems: state => state.items,
    getByCategory: (state) => {
      return (category_id: number) => state.items.filter(i => i.category_id === category_id)
    }
  }
})

async function getItems(supabase: any) {
  const query = `category_id, name, dscr, url, thumb, writer, review, year`
  return fetchSupabase(supabase, tableName, query, 'ord', {})
}

type BookResponse = Awaited<ReturnType<typeof getItems>>
export type Book = BookResponse['data']
