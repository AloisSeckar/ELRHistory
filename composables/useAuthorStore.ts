import { SupabaseClient } from '@supabase/supabase-js'
import { Author } from '@/database/types'

const tableName = 'elrhAuthor'

export const useAuthorStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Author[]
    }
  },
  actions: {
    async fill () {
      await fillStore(tableName, this, getItems)
    }
  },
  getters: {
    getItems: state => state.items,
    getCount: state => state.items.length,
    getById: (state) => {
      return (authorId: number) => state.items.find(i => i.authorId === authorId)
    }
  }
})

async function getItems (supabase: SupabaseClient) {
  const query = 'authorId, email, name'
  return await fetchSupabase(supabase, tableName, query, 'name', {})
}
