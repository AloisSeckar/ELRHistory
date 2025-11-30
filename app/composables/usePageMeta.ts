export type MetaDef = {
  type?: 'website' | 'article'
  url?: string
  title?: string
  dscr?: string
  image?: string
}

export function usePageMeta(meta: MetaDef) {
  return useSeoMeta({
    title: meta?.title || useRuntimeConfig().public.webTitle || 'ELRHistory',
    description: meta?.dscr || useRuntimeConfig().public.webAbout || '',
    ogType: meta?.type || 'website',
    ogUrl: meta?.url || useRuntimeConfig().public.webLink || '',
    ogTitle: meta?.title || useRuntimeConfig().public.webTitle || 'ELRHistory',
    ogDescription: meta?.dscr || useRuntimeConfig().public.webAbout || '',
    ogImage: meta?.image || useRuntimeConfig().public.ogImage || '',
    twitterCard: 'summary_large_image',
  })
}
