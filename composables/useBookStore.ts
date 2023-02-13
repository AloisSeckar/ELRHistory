import { Book } from '@/database/types'

const tableName = 'elrhBook'

export const useBookStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Book[]
    }
  },
  actions: {
    async fill () {
      await fillStore({
        supabaseClient: useSupabaseClient(),
        tableName,
        storeData: this,
        selectQuery: 'categoryId, name, dscr, url, thumb, writer, review, year',
        orderQuery: 'ord',
        orderOpts: {}
      })
    }
  },
  getters: {
    getItems: state => state.items,
    getCount: state => state.items.length,
    getByCategory: (state) => {
      return (categoryId: number) => state.items.filter((i: Book) => i.categoryId === categoryId)
    }
  }
})
