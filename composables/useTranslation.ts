import { useT as useIgnisT } from '../node_modules/nuxt-ignis/app/composables/useTranslation'

export function useT(key: string): string {
  return useIgnisT(key)
}

export function useTAdminAdd(key: string): string {
  return useTAdmin('admin.add', key)
}

export function useTAdminEdit(key: string): string {
  return useTAdmin('admin.edit', key)
}

export function useTAdminSelect(key: string): string {
  return useTAdmin('admin.select', key)
}

function useTAdmin(key1: string, key2: string) {
  return `${useT(key1)} ${useT(`admin.${key2}`)}`
}
