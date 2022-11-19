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
        let { data, error } = await supabase
            .from('elrh_news')
            .select(`date_created, content, elrh_author(author_id, name)`)
            .order('date_created', { ascending: false })
        if (data) {
            console.log("'elrh_news' loaded from Supabase")
            console.log(data)
            this.newsList = data
        } else {
            console.log("failed to load 'elrh_news' from Supabase")
            console.log(error)
        }
    }
  },
  getters: {
    getNews: state => state.newsList,
    getTopNews: state => state.newsList.slice(0,5),
  },
})