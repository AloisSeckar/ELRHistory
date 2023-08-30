import type { StoreData } from '@/composables/storeHelpers'
import type { Author } from '@/database/types'
import type { FormkitValue } from '@/utils/storeUtils'

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
    async init () {
      await fillStoreIfNeeded({
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
    getItems: state => get(state),
    getCount: state => get(state).length,
    getById: (state) => {
      return (authorId: number) => get(state).find(i => i.authorId === authorId) || { authorId: 0 } as Author
    },
    getAuthorList: (state): FormkitValue[] => get(state).map(author => ({ value: author.authorId, label: author.name }))
  }
})

function get (state: StoreData) {
  return getStoreItems<Author>(state)
}
