import { defineStore } from 'pinia'

const table_name = "elrh_news"

export const useNewsStore = defineStore({
  id: table_name + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as News[],
    }
  },
  actions: {
    async fill() {
      console.log("getting " + table_name + " from Supabase")
      getItems(useSupabaseClient())
      .then(x => {
        console.log(table_name + " loaded from Supabase")
        this.items = x.data
        this.loaded = true
      }).catch(x => {
        console.log("failed to load " + table_name + " from Supabase")
        console.log(x.error)
        this.loaded = false
      })
    }
  },
  getters: {
    getItems: state => state.items,
    getTopItems: state => state.items.slice(0, 5),
  },
})

async function getItems(supabase: any) {
  return await supabase
  .from(table_name)
  .select(`date_created, content, elrh_author(author_id, name)`)
  .order('date_created', { ascending: false })
}

type NewsResponse = Awaited<ReturnType<typeof getItems>>
export type News = NewsResponse['data']
