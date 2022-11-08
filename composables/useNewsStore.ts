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
        console.log("getting 'web_news' from Supabase")
        const supabase = useSupabaseClient()
        let { data } = await supabase
            .from('web_news')
            .select(`date_created, content`)
        if (data) {
            console.log("'web_news' loaded from Supabase")
            this.newsList = data
        } else {
            console.log("failed to load 'web_news' from Supabase")
        }
    }
  },
  getters: {
    getNews: state => state.newsList,
  },
})