type SiteConfig = {
  config: string
  value: string
}

type PageConfig = {
  page: string
  enabled: boolean
}


export const useAdminStore = defineStore({
 id: 'admins-store',
  state: () => {
    return {
      config: [] as SiteConfig[],
      pages: [] as PageConfig[], 
    }
  },
  actions: {
    async load() {
      this.config = await getSiteConfig()
      this.pages = await getPageConfig() 
    }
  },
})

async function getSiteConfig() {
  return (await useSupabaseClient<SiteConfig[]>().from('elrhAdminConfig').select('config, value')).data || getDefaultSiteConfig()
}
  
function getDefaultSiteConfig() {
  return [
    { config: 'webTitle', value: useRuntimeConfig().public.webTitle },
    { config: 'webAbout', value: useRuntimeConfig().public.webAbout },
    { config: 'webAuthor', value: useRuntimeConfig().public.webAuthor },
    { config: 'webLink', value: useRuntimeConfig().public.webLink },
    { config: 'displayContacts', value: 'true' },
    { config: 'displayNews', value: 'true' },
  ]
}

async function getPageConfig() {
  return (await useSupabaseClient<PageConfig[]>().from('elrhAdminPages').select('page, enabled')).data || getDefaultPageConfig()
}

function getDefaultPageConfig() {
  return [
    { page: 'articles', enabled: true },
    { page: 'books', enabled: true },
    { page: 'gallery', enabled: true },
    { page: 'links', enabled: true },
    { page: 'timeline', enabled: true },
  ]
}
