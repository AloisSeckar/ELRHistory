import { Book } from '@/database/types'
import { SupabaseClient } from '@supabase/supabase-js'

const tableName = "elrhBook"

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
      return (categoryId: number) => state.items.filter(i => i.categoryId === categoryId)
    }
  }
})

async function getItems(supabase: SupabaseClient) {
  const query = `categoryId, name, dscr, url, thumb, writer, review, year`
  return fetchSupabase(supabase, tableName, query, 'ord', {})
}
