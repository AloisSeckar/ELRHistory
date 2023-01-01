const tableName = "elrh_article"

export const useArticleStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Article[],
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
    },
    getById: (state) => {
      return (article_id: Number) => state.items.find(i => i.article_id == article_id)
    }
  }
})

async function getItems(supabase: any) {
  const query = `article_id, elrh_category(category_id, name), date_created, name, dscr, content, thumb, elrh_author(author_id, name), elrh_gallery(gallery_id, name)`
  return fetchSupabase(supabase, tableName, query, 'date_created', {ascending: false})
}

type ArticleResponse = Awaited<ReturnType<typeof getItems>>
export type Article = ArticleResponse['data']
