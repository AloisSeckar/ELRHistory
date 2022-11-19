import { defineStore } from 'pinia'

const table_name = "elrh_category"

export const useCategoryStore = defineStore({
  id: table_name + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Category[],
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
    getByType: (state) => {
      return (type: string) => state.items.filter(i => i.type === type)
    }
  },
})

async function getItems(supabase: any) {
  return await supabase
  .from(table_name)
  .select(`category_id, ord, name, dscr, type`)
  .order('ord')
}

type CategoryResponse = Awaited<ReturnType<typeof getItems>>
export type Category = CategoryResponse['data']
