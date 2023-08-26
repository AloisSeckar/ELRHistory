import { SupabaseUpdateData, SupabaseItemType } from '@/database/types'

// TODO replace "store: any" with proper TS definition
export async function useUpdateItem (store: any, item: SupabaseUpdateData, itemId: number, itemType: SupabaseItemType, redirect: string) {
  const result = await store.update(JSON.parse(JSON.stringify(item)), itemId)
  if (result) {
    useModalStore().showModal('Item saved', `Current ${itemType} was successfully updated`)
    return navigateTo(redirect)
  } else {
    useModalStore().showModal('Error', `Current ${itemType} wasn't updated`)
  }
}
