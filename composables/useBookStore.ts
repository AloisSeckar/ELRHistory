import { UpdateConfig } from './storeHelpers'
import { Book, BookDB } from '@/database/types'

const tableName = 'elrhBook'

export const useBookStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Book[]
    }
  },
  actions: {
    async fill () {
      await fillStore({
        supabaseClient: useSupabaseClient(),
        tableName,
        storeData: this,
        selectQuery: 'bookId, categoryId, dateCreated, dateEdited, name, dscr, url, thumb, writer, review, year',
        orderQuery: 'ord',
        orderOpts: {}
      })
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
    getItems: state => state.items || [] as Book[],
    getCount: state => state.items?.length || 0,
    getById: (state) => {
      return (bookId: number) => state.items?.find((i: Book) => i.bookId === bookId) || { bookId: 0 } as Book
    },
    getByCategory: (state) => {
      return (categoryId: number) => state.items?.filter((i: Book) => i.categoryId === categoryId) || [] as Book[]
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

function treatInput (input: BookDB) {
  input.dateEdited = new Date().toISOString()
  if (input.dateCreated === undefined) {
    input.dateCreated = new Date().toISOString()
  }
  input.ord = 1 // TODO fix mess in ordering
}
