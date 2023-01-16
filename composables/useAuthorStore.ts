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
    getByCategory: (state) => {
      return (category_id: number) => state.items.filter(i => i.category_id === category_id)
    }
  }
})

async function getItems(supabase: any) {
  const query = `author_id, email, name`
  return fetchSupabase(supabase, tableName, query, 'name', {})
}

type AuthorResponse = Awaited<ReturnType<typeof getItems>>
export type Author = AuthorResponse['data']
