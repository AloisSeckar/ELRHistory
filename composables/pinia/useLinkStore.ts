import type { StoreData, UpdateConfig } from '@/composables/usePiniaHelpers'
import type { Link, LinkDB } from '@/database/types'

const tableName = 'elrhLink'

export const useLinkStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Link[]
    } as StoreData
  },
  actions: {
    async init (forceReload?: boolean) {
      await useStoreInit({
        supabaseClient: useSupabaseClient(),
        tableName,
        storeData: this,
        selectQuery: 'linkId, elrhCategory(categoryId, name), dateCreated, dateEdited, name, dscr, url, thumb, elrhAuthor(authorId, name)',
        orderQuery: 'ord',
        orderOpts: {}
      }, forceReload)
    },
    async update (itemData: LinkDB, itemId?: number): Promise<boolean> {
      treatInput(itemData)

      const config: UpdateConfig = {
        supabaseClient: useSupabaseClient<LinkDB>(),
        tableName,
        itemKey: 'linkId',
        itemId,
        itemData
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
    }
  },
  getters: {
    getItems: state => get(state),
    getCount: state => get(state).length,
    getById: (state) => {
      return (linkId: number) => get(state).find(i => i.linkId === linkId) || { linkId: 0 } as Link
    },
    getByCategory: (state) => {
      return (categoryId: number) => get(state).filter(i => i.elrhCategory.categoryId === categoryId) || [] as Link[]
    },
    getEmpty: () => {
      const emptyItem: LinkDB = {
        categoryId: 0,
        ord: 0,
        dateCreated: new Date().toISOString(),
        dateEdited: new Date().toISOString(),
        name: '',
        dscr: '',
        url: '',
        thumb: '',
        authorId: 0
      }
      return emptyItem
    }
  }
})

function get (state: StoreData) {
  return getStoreItems<Link>(state)
}

function treatInput (input: LinkDB) {
  input.dateEdited = new Date().toISOString()
  if (input.dateCreated === undefined) {
    input.dateCreated = new Date().toISOString()
  }
  input.ord = 1 // TODO fix mess in ordering
}
