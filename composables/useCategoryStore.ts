import { StoreData } from './storeHelpers'
import { Category } from '@/database/types'

const tableName = 'elrhCategory'

export const useCategoryStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Category[]
    } as StoreData
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
    getItems: state => (state.items || []) as Category[],
    getCount: state => state.items?.length || 0,
    getById: (state) => {
      return (categoryId: number) => getStoreItems<Category>(state).find(i => i.categoryId === categoryId) || { categoryId: 0 } as Category
    },
    getByType: (state) => {
      return (type: string) => getStoreItems<Category>(state).filter(i => i.type === type) || [] as Category[]
    }
  }
})
