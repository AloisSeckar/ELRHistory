import { preventSingleLetterOrphans } from 'elrh-pslo'
import type {
  SupabaseStoreClient, SupabaseUpdateClient,
  SupabaseStoreData, SupabaseUpdateData, SupabaseItemType,
  AbstractValues,
  SupabaseUpdateFunction,
} from '@/database/types'

export type OrderOpts = {
  ascending?: boolean
}

export type StoreData = {
  items: SupabaseStoreData
  loaded: boolean
}

export type StoreConfig = {
  supabaseClient: SupabaseStoreClient
  tableName: string
  storeData: StoreData
  selectQuery: string
  orderQuery: string
  orderOpts?: OrderOpts
  preventSingleLetterOrphans?: string[]
}

export async function useStoreInit(config: StoreConfig, forceReload?: boolean) {
  if (!config.storeData?.loaded || forceReload) {
    console.debug('getting ' + config.tableName + ' from Supabase')
    await fetchSupabase(config)
      .then((response: unknown) => {
        console.debug(`${config.tableName} loaded from Supabase`)

        const typedResponse = response as { data: SupabaseStoreData }

        // prevent single-letter orpans in texts
        if (config.preventSingleLetterOrphans) {
          config.preventSingleLetterOrphans.forEach((column) => {
            typedResponse.data?.forEach((data: AbstractValues) => {
              if (data[column]) {
                data[column] = preventSingleLetterOrphans(data[column] as string)
              }
            })
          })
        }

        config.storeData.items = typedResponse.data
        config.storeData.loaded = true
      }).catch((err: Error) => {
        console.error(`failed to load ${config.tableName} from Supabase`)
        console.error(err)
        config.storeData.loaded = false
      })
  } else {
    console.debug(config.tableName + ' already loaded')
  }
}

async function fetchSupabase(config: StoreConfig) {
  return await config.supabaseClient
    .from(config.tableName)
    .select(config.selectQuery)
    .order(config.orderQuery, config.orderOpts ? config.orderOpts : {})
}

// TODO replace "store: any" with proper TS definition
export async function useUpdateItem(update: SupabaseUpdateFunction, itemType: SupabaseItemType, redirect: string, item: SupabaseUpdateData, itemId?: number) {
  const action = itemId ? 'updated' : 'saved'
  const result = await update(JSON.parse(JSON.stringify(item)), itemId)
  if (result) {
    useModalStore().showModal('Item saved', `Current ${itemType} was successfully ${action}`)
    return navigateTo(redirect)
  } else {
    useModalStore().showModal('Error', `Current ${itemType} wasn't ${action}`)
    // TODO preserve input if error occured
  }
}

export type UpdateConfig = {
  supabaseClient: SupabaseUpdateClient
  tableName: string
  itemData: SupabaseUpdateData
  itemId?: number
  itemKey: string
}

export async function useDBCreate(config: UpdateConfig): Promise<boolean> {
  const { data, error } = await config.supabaseClient
    .from(config.tableName)
    .insert(config.itemData)
    .select()

  if (data) {
    console.debug(`new item saved into ${config.tableName} in Supabase`)
    return true
  } else {
    console.error(`failed to save new item into ${config.tableName} in Supabase`)
    console.error(error?.message)
    return false
  }
}

export async function useDBUpdate(config: UpdateConfig): Promise<boolean> {
  const { data, error } = await config.supabaseClient
    .from(config.tableName)
    .update(config.itemData)
    .eq(config.itemKey, config.itemId)
    .select()

  if (data) {
    console.debug(`updated item in ${config.tableName} in Supabase`)
    return true
  } else {
    console.error(`failed to update item in ${config.tableName} in Supabase`)
    console.error(error?.message)
    return false
  }
}
