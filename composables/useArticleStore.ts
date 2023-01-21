import { Article, NewArticle } from '@/database/types'
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
    async save(newItem: NewArticle) {
      console.log(newItem);
      const { data, error } = await useSupabaseClient<NewArticle>()
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
    async update(editedItem: Article) {
      const articleId = editedItem.article_id;
      console.log(editedItem);

      const { data, error } = await useSupabaseClient<Article>()
        .from(tableName)
        .update(editedItem)
        .eq('article_id', articleId)
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
      return (article_id: Number) => state.items.find(i => i.article_id == article_id)
    },
    getEmpty: (): NewArticle => {
      const newArticle: NewArticle = {
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
