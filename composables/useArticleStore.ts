import { Article, ArticleDB } from '@/database/types'
import { SupabaseClient } from '@supabase/supabase-js'

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
    },
    async create(newItem: ArticleDB) {
      const { data, error } = await useSupabaseClient<ArticleDB>()
        .from(tableName)
        .insert(newItem)
        .select()

      if (data) {
        console.debug("new article saved into Supabase")
        fillStore(tableName, this, getItems) // TODO can we just load the new one?
      } else {
        console.error("failed to save new article into Supabase")
        console.error(error?.message)
      }
    },
    async update(itemId: Number, editedItem: ArticleDB) {
      const { data, error } = await useSupabaseClient<ArticleDB>()
        .from(tableName)
        .update(editedItem)
        .eq('article_id', itemId)
        .select()

      if (data) {
        console.debug("new article saved into Supabase")
        fillStore(tableName, this, getItems) // TODO can we just load the new one?
      } else {
        console.error("failed to save new article into Supabase")
        console.error(error?.message)
      }
    }
  },
  getters: {
    getItems: state => state.items,
    getCount: state => state.items.length,
    getByCategory: (state) => {
      return (category_id: number) => state.items.filter(i => i.category_id === category_id)
    },
    getById: (state) => {
      return (article_id: Number) => {
        const article = state.items.find(i => i.article_id == article_id)
        return article ? article : { article_id: 0} as Article
      }
    },
    getEmpty: (): ArticleDB => {
      const newArticle: ArticleDB = {
        category_id: 0,
        date_created: new Date().toISOString(),
        date_edited: new Date().toISOString(),
        name: '',
        dscr: '',
        content: '',
        thumb: '',
        author_id: 0,
        gallery_id: undefined,
      }
      return newArticle
    }
  }
})

async function getItems(supabase: SupabaseClient) {
  const query = `article_id, elrh_category(category_id, name), date_created, name, dscr, content, thumb, elrh_author(author_id, name), elrh_gallery(gallery_id, name)`
  return fetchSupabase(supabase, tableName, query, 'date_created', { ascending: false })
}
