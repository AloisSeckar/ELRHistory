import type { StoreData } from '@/composables/usePiniaHelpers'

export function getStoreItems<T> (data: StoreData): T[] {
  return data?.items as T[] || [] as T[]
}

export type FormkitValue = {
  value: number | null,
  label: string
}
