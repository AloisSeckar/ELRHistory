import { defineStore } from 'pinia'

const tableName = "elrh_text"

export const useTextStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Text[],
    }
  },
  actions: {
    async fill() {
      fillStore(tableName, this, getItems)
    }
  },
  getters: {
    getKey: (state) => {
        return (key: string) => state.items.find(i => i.key == key)
    }
  },
})

async function getItems(supabase: any) {
  const query = `key, value`
  return fetchSupabase(supabase, tableName, query, 'key', { })
}

type TextResponse = Awaited<ReturnType<typeof getItems>>
export type Text = TextResponse['data']
