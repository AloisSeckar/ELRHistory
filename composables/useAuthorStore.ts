import { StoreData } from './storeHelpers'
import { Author } from '@/database/types'

const tableName = 'elrhAuthor'

export const useAuthorStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Author[]
    } as StoreData
  },
  actions: {
    async fill () {
      await fillStore({
        supabaseClient: useSupabaseClient(),
        tableName,
        storeData: this,
        selectQuery: 'authorId, email, name',
        orderQuery: 'name',
        orderOpts: {}
      })
    }
  },
  getters: {
    getItems: state => state.items,
    getCount: state => state.items.length,
    getById: (state) => {
      return (authorId: number) => state.items.find((i: Author) => i.authorId === authorId)
    }
  }
})
