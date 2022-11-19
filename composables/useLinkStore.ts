import { defineStore } from 'pinia'

const table_name = "elrh_link"

export const useLinkStore = defineStore({
  id: table_name + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Link[],
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
    getByCategory: (state) => {
      return (category: number) => state.items.filter(i => i.category_id === category) // TODO fix the TS type error
    }
  },
})

async function getItems(supabase: any) {
  return await supabase
  .from(table_name)
  .select(`category_id, name, dscr, url, thumb`)
  .order('ord')
}

type LinkResponse = Awaited<ReturnType<typeof getItems>>
export type Link = LinkResponse['data']
