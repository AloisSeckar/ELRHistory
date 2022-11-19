import { defineStore } from 'pinia'

const table_name = "elrh_category"

export const useCategoryStore = defineStore({
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
        .select(`category_id, ord, name, dscr, type`)
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
    getByType: (state) => {
      return (type: string) => state.items.filter(i => i.type === type) // TODO fix the TS type error
    }
  },
})