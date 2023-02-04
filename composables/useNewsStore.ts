import { SupabaseClient } from '@supabase/supabase-js'
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
      await fillStore(tableName, this, getItems)
    }
  },
  getters: {
    getItems: state => state.items,
    getTopItems: state => state.items.slice(0, 5),
    getCount: state => state.items.length
  }
})

async function getItems (supabase: SupabaseClient) {
  const query = 'dateCreated, content, elrhAuthor(authorId, name)'
  return await fetchSupabase(supabase, tableName, query, 'dateCreated', { ascending: false })
}
