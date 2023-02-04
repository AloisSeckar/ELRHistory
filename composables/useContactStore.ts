import { SupabaseClient } from '@supabase/supabase-js'
import { Contact } from '@/database/types'

const tableName = 'elrhContact'

export const useContactStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Contact[]
    }
  },
  actions: {
    async fill () {
      await fillStore(tableName, this, getItems)
    }
  },
  getters: {
  }
})

async function getItems (supabase: SupabaseClient) {
  const query = 'name, email, phone, fb'
  return await fetchSupabase(supabase, tableName, query, 'name', { })
}
