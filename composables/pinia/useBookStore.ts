import { StoreData, UpdateConfig } from '@/composables/usePiniaHelpers'
import { Book, BookDB } from '@/database/types'

const tableName = 'elrhBook'

export const useBookStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Book[]
    } as StoreData
  },
  actions: {
    async init (forceReload?: boolean) {
      await useStoreInit({
        supabaseClient: useSupabaseClient(),
        tableName,
        storeData: this,
        selectQuery: 'bookId, elrhCategory(categoryId, name), dateCreated, dateEdited, name, dscr, url, thumb, writer, review, year, elrhAuthor(authorId, name)',
        orderQuery: 'ord',
        orderOpts: {}
      }, forceReload)
    },
    async update (itemData: BookDB, itemId?: number): Promise<boolean> {
      treatInput(itemData)

      const config: UpdateConfig = {
        supabaseClient: useSupabaseClient<BookDB>(),
        tableName,
        itemKey: 'bookId',
        itemId,
        itemData
      }

      let ret: boolean
      if (itemId) {
        ret = await useDBUpdate(config)
      } else {
        ret = await useDBCreate(config)
      }

      if (ret) {
        this.init(true) // TODO can we just load the new one?
      }

      return ret
    }
  },
  getters: {
    getItems: state => get(state),
    getCount: state => get(state).length,
    getByCategory: (state) => {
      return (categoryId: number) => get(state).filter(i => i.categoryId === categoryId) || [] as Book[]
    },
    getById: (state) => {
      return (bookId: number) => get(state).find(i => i.bookId === bookId) || { bookId: 0 } as Book
    },
    getEmpty: () => {
      const newBook: BookDB = {
        categoryId: 0,
        ord: 0,
        dateCreated: new Date().toISOString(),
        dateEdited: new Date().toISOString(),
        name: '',
        dscr: '',
        thumb: '',
        writer: '',
        url: '',
        year: '2023',
        authorId: 0
      }
      return newBook
    }
  }
})

function get (state: StoreData) {
  return getStoreItems<Book>(state)
}

function treatInput (input: BookDB) {
  input.dateEdited = new Date().toISOString()
  if (input.dateCreated === undefined) {
    input.dateCreated = new Date().toISOString()
  }
  input.ord = 1 // TODO fix mess in ordering
}
