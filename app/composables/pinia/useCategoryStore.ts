import type { StoreData } from '@/composables/usePiniaHelpers'
import type { Category } from '@/../database/types'
import type { FormkitValue } from '~/utils/storeUtils'

const tableName = 'elrhCategory'

export const useCategoryStore = defineStore(tableName + '-store', {
  state: () => {
    return {
      loaded: false,
      items: [] as Category[],
    } as StoreData
  },
  actions: {
    async init() {
      await useStoreInit({
        supabaseClient: useSupabaseClient(),
        tableName,
        storeData: this,
        selectQuery: 'categoryId, ord, name, dscr, type',
        orderQuery: 'ord',
      })
    },
  },
  getters: {
    getItems: state => get(state),
    getCount: state => get(state).length,
    getById: (state) => {
      return (categoryId: number) => get(state).find(i => i.categoryId === categoryId) || { categoryId: 0 } as Category
    },
    getByType: (state) => {
      return (type: string) => get(state).filter(i => i.type === type) || [] as Category[]
    },
    getCategoryList: (state) => {
      return (type: string): FormkitValue[] => {
        const filteredItems = get(state).filter(i => i.type === type) || [] as Category[]
        const categories = filteredItems.map(cat => ({ value: cat.categoryId, label: cat.name }))
        categories.unshift({ value: -1, label: '' })
        return categories
      }
    },
  },
})

function get(state: StoreData) {
  return getStoreItems<Category>(state)
}
