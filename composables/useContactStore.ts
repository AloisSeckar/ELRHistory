import { Contact } from '@/database/types'
import { SupabaseClient } from '@supabase/supabase-js'

const tableName = "elrhContact"

export const useContactStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Contact[],
    }
  },
  actions: {
    async fill() {
      fillStore(tableName, this, getItems)
    }
  },
  getters: {
  },
})

async function getItems(supabase: SupabaseClient) {
  const query = `name, email, phone, fb`
  return fetchSupabase(supabase, tableName, query, 'name', { })
}
