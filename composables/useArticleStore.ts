import { StoreData, UpdateConfig } from './storeHelpers'
import { Article, ArticleDB } from '@/database/types'

const tableName = 'elrhArticle'

export const useArticleStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Article[]
    } as StoreData
  },
  actions: {
    async fill () {
      await fillStore({
        supabaseClient: useSupabaseClient<Article>(),
        tableName,
        storeData: this,
        selectQuery: 'articleId, elrhCategory(categoryId, name), dateCreated, dateEdited, name, dscr, content, thumb, elrhAuthor(authorId, name), elrhGallery(galleryId, name)',
        orderQuery: 'dateCreated',
        orderOpts: { ascending: false }
      })
    },
    async update (itemData: ArticleDB, itemId?: number): Promise<boolean> {
      treatInput(itemData)

      const config: UpdateConfig = {
        supabaseClient: useSupabaseClient<ArticleDB>(),
        tableName,
        itemKey: 'articleId',
        itemId,
        itemData
      }

      let ret: boolean
      if (itemId) {
        ret = await doUpdate(config)
      } else {
        ret = await doCreate(config)
      }

      if (ret) {
        this.fill() // TODO can we just load the new one?
      }

      return ret
    }
  },
  getters: {
    getItems: state => state.items || [] as Article[],
    getCount: state => state.items?.length || 0,
    getByCategory: (state) => {
      return (categoryId: number) => state.items?.filter((i: Article) => i.categoryId === categoryId) || { articleId: 0 } as Article
    },
    getById: (state) => {
      return (articleId: number) => state.items?.find((i: Article) => i.articleId === articleId) || { articleId: 0 } as Article
    },
    getEmpty: () => {
      const newArticle: ArticleDB = {
        categoryId: 0,
        dateCreated: new Date().toISOString(),
        dateEdited: new Date().toISOString(),
        name: '',
        dscr: '',
        content: '',
        thumb: '',
        authorId: 0,
        galleryId: undefined
      }
      return newArticle
    }
  }
})

function treatInput (input: ArticleDB) {
  input.dateEdited = new Date().toISOString()
  if (input.dateCreated === undefined) {
    input.dateCreated = new Date().toISOString()
  }
  if (input.galleryId === -1) {
    input.galleryId = undefined
  }
}
