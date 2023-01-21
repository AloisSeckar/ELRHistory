import { Category } from '@/database/types'
import { SupabaseClient } from '@supabase/supabase-js'

const tableName = "elrh_category"

export const useCategoryStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Category[],
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
      return (category_id: number) => state.items.find(i => i.category_id === category_id)
    },
    getByType: (state) => {
      return (type: string) => state.items.filter(i => i.type === type)
    }
  }
})

async function getItems(supabase: SupabaseClient) {
  const query = `category_id, ord, name, dscr, type`
  return fetchSupabase(supabase, tableName, query, 'ord', {})
}
