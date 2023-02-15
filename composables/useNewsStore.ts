import { News } from '@/database/types'

const tableName = 'elrhNews'

export const useNewsStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as News[]
    }
  },
  actions: {
    async fill () {
      await fillStore({
        supabaseClient: useSupabaseClient(),
        tableName,
        storeData: this,
        selectQuery: 'newsId, dateCreated, content, elrhAuthor(authorId, name)',
        orderQuery: 'dateCreated',
        orderOpts: { ascending: false }
      })
    }
  },
  getters: {
    getItems: state => state.items,
    getTopItems: state => state.items.slice(0, 5),
    getCount: state => state.items.length
  }
})
