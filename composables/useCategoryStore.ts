import { SupabaseClient } from '@supabase/supabase-js'
import { Category } from '@/database/types'

const tableName = 'elrhCategory'

export const useCategoryStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Category[]
    }
  },
  actions: {
    async fill () {
      await fillStore(tableName, this, getItems)
    }
  },
  getters: {
    getItems: state => state.items,
    getById: (state) => {
      return (categoryId: number) => state.items.find(i => i.categoryId === categoryId)
    },
    getByType: (state) => {
      return (type: string) => state.items.filter(i => i.type === type)
    }
  }
})

async function getItems (supabase: SupabaseClient) {
  const query = 'categoryId, ord, name, dscr, type'
  return await fetchSupabase(supabase, tableName, query, 'ord', {})
}
