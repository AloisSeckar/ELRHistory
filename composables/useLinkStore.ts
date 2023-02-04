import { SupabaseClient } from '@supabase/supabase-js'
import { Link } from '@/database/types'

const tableName = 'elrhLink'

export const useLinkStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Link[]
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
    getByCategory: (state) => {
      return (categoryId: number) => state.items.filter(i => i.categoryId === categoryId)
    }
  }
})

async function getItems (supabase: SupabaseClient) {
  const query = 'categoryId, name, dscr, url, thumb'
  return await fetchSupabase(supabase, tableName, query, 'ord', {})
}
