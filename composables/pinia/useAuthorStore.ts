import type { StoreData } from '@/composables/usePiniaHelpers'
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
      await useStoreInit({
        supabaseClient: useSupabaseClient(),
        tableName,
        storeData: this,
        selectQuery: 'authorId, email, name',
        orderQuery: 'name'
      })
    }
  },
  getters: {
    getItems: state => get(state),
    getCount: state => get(state).length,
    getById: (state) => {
      return (authorId: number) => get(state).find(i => i.authorId === authorId) || { authorId: 0 } as Author
    },
    getAuthorList: (state): FormkitValue[] => {
      const authors = get(state).map(author => ({ value: author.authorId, label: author.name }))
      authors.unshift({ value: -1, label: '' })
      return authors
    },
    getCurrent: (state) => {
      return get(state).filter(a => a.email === useLoginStore().user).at(0)?.authorId || -1
    }
  }
})

function get (state: StoreData) {
  return getStoreItems<Author>(state)
}
