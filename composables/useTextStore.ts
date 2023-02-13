import { Text } from '@/database/types'

const tableName = 'elrhText'

export const useTextStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Text[]
    }
  },
  actions: {
    async fill () {
      await fillStore({
        supabaseClient: useSupabaseClient(),
        tableName,
        storeData: this,
        selectQuery: 'key, value',
        orderQuery: 'key',
        orderOpts: {}
      })
    }
  },
  getters: {
    getKey: (state) => {
      return (key: string) => {
        const match = state.items.find((i: Text) => i.key === key)
        if (match) {
          return match.value
        } else {
          return `UNDEFINED {'${key}'}`
        }
      }
    }
  }
})
