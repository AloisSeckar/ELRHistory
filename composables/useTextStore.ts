import { SupabaseClient } from '@supabase/supabase-js'
import { Text } from '@/database/types'

const tableName = 'elrhText'

export const useTextStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Text[]
    }
  },
  actions: {
    async fill () {
      await fillStore(tableName, this, getItems)
    }
  },
  getters: {
    getKey: (state) => {
      return (key: string) => {
        const match = state.items.find(i => i.key === key)
        if (match) {
          return match.value
        } else {
          return `UNDEFINED {'${key}'}`
        }
      }
    }
  }
})

async function getItems (supabase: SupabaseClient) {
  const query = 'key, value'
  return await fetchSupabase(supabase, tableName, query, 'key', { })
}
