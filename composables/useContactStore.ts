import { StoreData } from './storeHelpers'
import { Contact } from '@/database/types'

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
    async fill () {
      await fillStore({
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
