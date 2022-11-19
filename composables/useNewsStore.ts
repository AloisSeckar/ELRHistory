import { defineStore } from 'pinia'
import { threadId } from 'worker_threads'

export const useNewsStore = defineStore({
  id: 'news-store',
  state: () => {
    return {
      loaded: false,
      newsList: [] as Object[],
    }
  },
  actions: {
    async fill() {
      console.log("getting 'elrh_news' from Supabase")
      const supabase = useSupabaseClient()
      const { data, error } = await supabase
        .from('elrh_news')
        .select(`date_created, content, elrh_author(author_id, name)`)
        .order('date_created', { ascending: false })
      if (data) {
        console.log("'elrh_news' loaded from Supabase")
        this.newsList = data
        this.loaded = true
      } else {
        console.log("failed to load 'elrh_news' from Supabase")
        console.log(error)
        this.loaded = false
      }
    }
  },
  getters: {
    getNews: state => state.newsList,
    getTopNews: state => state.newsList.slice(0, 5),
  },
})