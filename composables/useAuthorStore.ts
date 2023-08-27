import type { StoreData } from '@/composables/storeHelpers'
import type { Author } from '@/database/types'
import type { FormkitValue } from '@/utils/typeUtils'

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
    getItems: state => (state.items || []) as Author[],
    getCount: state => state.items?.length || 0,
    getById: (state) => {
      return (authorId: number) => getStoreItems<Author>(state).find(i => i.authorId === authorId) || { authorId: 0 } as Author
    },
    getAuthorList: (state): FormkitValue[] => {
      const items = (state.items || []) as Author[]
      return items.map(author => ({ value: author.authorId, label: author.name }))
    }
  }
})
