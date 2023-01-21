import { Author } from '@/database/types'
import { SupabaseClient } from '@supabase/supabase-js'

const tableName = "elrh_author"

export const useAuthorStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Author[],
    }
  },
  actions: {
    async fill() {
      fillStore(tableName, this, getItems)
    }
  },
  getters: {
    getItems: state => state.items,
    getCount: state => state.items.length,
    getById: (state) => {
      return (author_id: number) => state.items.find(i => i.author_id === author_id)
    }
  }
})

async function getItems(supabase: SupabaseClient) {
  const query = `author_id, email, name`
  return fetchSupabase(supabase, tableName, query, 'name', {})
}
