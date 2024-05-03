import type { StoreData, UpdateConfig } from '@/composables/usePiniaHelpers'
import type { Timeline, TimelineDB } from '@/database/types'

const tableName = 'elrhTimeline'

export const useTimelineStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Timeline[],
    } as StoreData
  },
  actions: {
    async init(forceReload?: boolean) {
      await useStoreInit({
        supabaseClient: useSupabaseClient(),
        tableName,
        storeData: this,
        selectQuery: 'timelineId, title, content, tooltip, elrhAuthor(authorId, name)',
        orderQuery: 'title',
        orderOpts: { ascending: false },
        preventSingleLetterOrphans: ['title', 'content', 'tooltip'],
      }, forceReload)
    },
    async update(itemData: TimelineDB, itemId?: number): Promise<boolean> {
      // treatInput(itemData)

      const config: UpdateConfig = {
        supabaseClient: useSupabaseClient<TimelineDB>(),
        tableName,
        itemKey: 'timelineId',
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
    getById: (state) => {
      return (timelineId: number) => get(state).find(i => i.timelineId === timelineId) || { timelineId: 0 } as Timeline
    },
    getBatch: (state) => {
      return (from: number, chunkSize?: number) => get(state).slice(from, from + (chunkSize || 10)) || [] as Timeline[]
    },
    getEmpty: () => {
      const emptyItem: TimelineDB = {
        // TODO dates in db model
        // dateCreated: new Date().toISOString(),
        // dateEdited: new Date().toISOString(),
        title: '',
        content: '',
        tooltip: '',
        authorId: 0,
      }
      return emptyItem
    },
    getFirstId: (state) => {
      return get(state).at(0)?.timelineId || 0
    },
  },
})

function get(state: StoreData) {
  return getStoreItems<Timeline>(state)
}

/*
function treatInput (input: TimelineDB) {
  input.dateEdited = new Date().toISOString()
  if (input.dateCreated === undefined) {
    input.dateCreated = new Date().toISOString()
  }
}
*/
