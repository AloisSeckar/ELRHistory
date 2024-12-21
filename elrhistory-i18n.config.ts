import cs from '@/assets/lang/cs.json'
import en from '@/assets/lang/en.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: useRuntimeConfig().public.lang,
  fallbackLocale: useRuntimeConfig().public.lang,
  messages: { cs, en },
  warnHtmlMessage: false,
  pluralRules: {
    cs: function csPluralizationRule(choice: number) {
      if (choice > 4) {
        return 3
      } else if (choice > 1) {
        return 2
      } else {
        return choice
      }
    },
  },
}))
