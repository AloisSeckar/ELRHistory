import type { StoreData } from '@/composables/storeHelpers'
import type { Contact } from '@/database/types'

const tableName = 'elrhContact'

export const useContactStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Contact[]
    } as StoreData
  },
  actions: {
    async init () {
      await fillStoreIfNeeded({
        supabaseClient: useSupabaseClient(),
        tableName,
        storeData: this,
        selectQuery: 'name, email, phone, fb',
        orderQuery: 'name',
        orderOpts: {}
      })
    }
  },
  getters: {
  }
})
