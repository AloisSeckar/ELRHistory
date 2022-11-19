import { defineStore } from 'pinia'

const table_name = "elrh_link"

export const useLinkStore = defineStore({
  id: table_name + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Object[],
    }
  },
  actions: {
    async fill() {
      console.log("getting " + table_name + " from Supabase")
      const supabase = useSupabaseClient()
      const { data, error } = await supabase
        .from(table_name)
        .select(`category_id, name, dscr, url, thumb`)
        .order('ord')
      if (data) {
        console.log(table_name + " loaded from Supabase")
        this.items = data
        this.loaded = true
      } else {
        console.log("failed to load " + table_name + " from Supabase")
        console.log(error)
        this.loaded = false
      }
    }
  },
  getters: {
    getItems: state => state.items,
    getByCategory: (state) => {
      return (category: number) => state.items.filter(i => i.category_id === category) // TODO fix the TS type error
    }
  },
})