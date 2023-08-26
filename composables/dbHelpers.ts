import { SupabaseUpdateData, SupabaseItemType } from '@/database/types'

// TODO replace "store: any" with proper TS definition
export async function useUpdateItem (store: any, itemType: SupabaseItemType, redirect: string, item: SupabaseUpdateData, itemId?: number) {
  const action = itemId ? 'updated' : 'saved'
  const result = await store.update(JSON.parse(JSON.stringify(item)), itemId)
  if (result) {
    useModalStore().showModal('Item saved', `Current ${itemType} was successfully ${action}`)
    return navigateTo(redirect)
  } else {
    useModalStore().showModal('Error', `Current ${itemType} wasn't ${action}`)
    // TODO preserve input if error occured
  }
}
