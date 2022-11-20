import { defineStore } from 'pinia'

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
    getByType: (state) => {
      return (type: string) => state.items.filter(i => i.type === type)
    }
  },
})

async function getItems(supabase: any) {
  const query = `category_id, ord, name, dscr, type`
  return fetchSupabase(supabase, tableName, query, 'ord', {})
}

type CategoryResponse = Awaited<ReturnType<typeof getItems>>
export type Category = CategoryResponse['data']
