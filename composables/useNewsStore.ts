import { defineStore } from 'pinia'

export const useNewsStore = defineStore({
  id: 'news-store',
  state: () => {
    return {
      newsList: [] as Object[],
    }
  },
  actions: {
    async fill() {
        console.log("getting 'elrh_news' from Supabase")
        const supabase = useSupabaseClient()
        let { data } = await supabase
            .from('elrh_news')
            .select(`date_created, content`)
            .order('date_created', { ascending: false })
        if (data) {
            console.log("'elrh_news' loaded from Supabase")
            this.newsList = data
        } else {
            console.log("failed to load 'elrh_news' from Supabase")
        }
    }
  },
  getters: {
    getNews: state => state.newsList,
    getTopNews: state => state.newsList.slice(0,5),
  },
})