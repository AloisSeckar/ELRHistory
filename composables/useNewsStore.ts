import { UpdateConfig } from './storeHelpers'
import { News, NewsDB } from '@/database/types'

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
        selectQuery: 'newsId, dateCreated, dateEdited, title, content, elrhAuthor(authorId, name)',
        orderQuery: 'dateCreated',
        orderOpts: { ascending: false }
      })
    },
    async update (itemData: NewsDB, itemId?: number): Promise<boolean> {
      treatInput(itemData)

      const config: UpdateConfig = {
        supabaseClient: useSupabaseClient<NewsDB>(),
        tableName,
        itemKey: 'newsId',
        itemId,
        itemData
      }

      let ret: boolean
      if (itemId) {
        ret = await doUpdate(config)
      } else {
        ret = await doCreate(config)
      }

      if (ret) {
        this.fill() // TODO can we just load the new one?
      }

      return ret
    }
  },
  getters: {
    getItems: state => state.items,
    getTopItems: state => state.items.slice(0, 5),
    getCount: state => state.items.length,
    getById: (state) => {
      return (newsId: number) => {
        const news = state.items.find((i: News) => i.newsId === newsId)
        return news || { newsId: 0 } as News
      }
    },
    getEmpty: (): NewsDB => {
      const emptyItem: NewsDB = {
        dateCreated: new Date().toISOString(),
        dateEdited: new Date().toISOString(),
        title: '',
        content: '',
        authorId: 0
      }
      return emptyItem
    }
  }
})

function treatInput (input: NewsDB) {
  input.dateEdited = new Date().toISOString()
  if (input.dateCreated === undefined) {
    input.dateCreated = new Date().toISOString()
  }
}
