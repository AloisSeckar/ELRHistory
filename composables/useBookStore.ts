import { Book } from '@/database/types'
import { SupabaseClient } from '@supabase/supabase-js'

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
    getCount: state => state.items.length,
    getByCategory: (state) => {
      return (category_id: number) => state.items.filter(i => i.category_id === category_id)
    }
  }
})

async function getItems(supabase: SupabaseClient) {
  const query = `category_id, name, dscr, url, thumb, writer, review, year`
  return fetchSupabase(supabase, tableName, query, 'ord', {})
}
