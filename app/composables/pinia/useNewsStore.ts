import type { StoreData, UpdateConfig } from '@/composables/usePiniaHelpers'
import type { News, NewsDB, SupabaseUpdateData } from '@/database/types'

const tableName = 'elrhNews'

export const useNewsStore = defineStore(tableName + '-store', {
  state: () => {
    return {
      loaded: false,
      items: [] as News[],
    } as StoreData
  },
  actions: {
    async init(forceReload?: boolean) {
      await useStoreInit({
        supabaseClient: useSupabaseClient(),
        tableName,
        storeData: this,
        selectQuery: 'newsId, dateCreated, dateEdited, title, content, url, elrhAuthor(authorId, name)',
        orderQuery: 'dateCreated',
        orderOpts: { ascending: false },
        preventSingleLetterOrphans: ['content'],
      }, forceReload)
    },
    async update(itemData: SupabaseUpdateData, itemId?: number): Promise<boolean> {
      treatInput(itemData as NewsDB)

      const config: UpdateConfig = {
        supabaseClient: useSupabaseClient<NewsDB>(),
        tableName,
        itemKey: 'newsId',
        itemId,
        itemData,
      }

      let ret: boolean
      if (itemId) {
        ret = await useDBUpdate(config)
      } else {
        ret = await useDBCreate(config)
      }

      if (ret) {
        this.init(true) // TODO can we just load the new one?
      }

      return ret
    },
  },
  getters: {
    getItems: state => get(state),
    getCount: state => get(state).length,
    getTopItems: state => get(state).slice(0, 5) || [] as News[],
    getById: (state) => {
      return (newsId: number) => get(state).find(i => i.newsId === newsId) || { newsId: 0 } as News
    },
    getEmpty: () => {
      const emptyItem: NewsDB = {
        dateCreated: new Date().toISOString(),
        dateEdited: new Date().toISOString(),
        title: '',
        content: '',
        url: undefined,
        authorId: 0,
      }
      return emptyItem
    },
    getFirstId: (state) => {
      return get(state).at(0)?.newsId || 0
    },
  },
})

function get(state: StoreData) {
  return getStoreItems<News>(state)
}

function treatInput(input: NewsDB) {
  input.dateEdited = new Date().toISOString()
  if (input.dateCreated === undefined) {
    input.dateCreated = new Date().toISOString()
  }
}
