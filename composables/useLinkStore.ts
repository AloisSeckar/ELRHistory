const tableName = "elrh_link"

export const useLinkStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Link[],
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
  const query = `category_id, name, dscr, url, thumb`
  return fetchSupabase(supabase, tableName, query, 'ord', {})
}

type LinkResponse = Awaited<ReturnType<typeof getItems>>
export type Link = LinkResponse['data']
