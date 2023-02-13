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
      await fillStore({
        supabaseClient: useSupabaseClient(),
        tableName,
        storeData: this,
        selectQuery: 'categoryId, ord, name, dscr, type',
        orderQuery: 'ord',
        orderOpts: {}
      })
    }
  },
  getters: {
    getItems: state => state.items,
    getById: (state) => {
      return (categoryId: number) => state.items.find((i: Category) => i.categoryId === categoryId)
    },
    getByType: (state) => {
      return (type: string) => state.items.filter((i: Category) => i.type === type)
    }
  }
})
