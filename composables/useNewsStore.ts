const tableName = "elrh_news"

export const useNewsStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as News[],
    }
  },
  actions: {
    async fill() {
      fillStore(tableName, this, getItems)
    }
  },
  getters: {
    getItems: state => state.items,
    getTopItems: state => state.items.slice(0, 5),
    getCount: state => state.items.length
  },
})

async function getItems(supabase: any) {
  const query = `date_created, content, elrh_author(author_id, name)`
  return fetchSupabase(supabase, tableName, query, 'date_created', { ascending: false })
}

type NewsResponse = Awaited<ReturnType<typeof getItems>>
export type News = NewsResponse['data']
