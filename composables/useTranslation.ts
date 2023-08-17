export function useT (key: string): string {
  return useNuxtApp().$i18n.t(key)
}
