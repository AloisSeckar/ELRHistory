import { SupabaseClient } from '@supabase/supabase-js'

export interface OrderOpts {
  ascending?: boolean
}

export interface StoreData {
  items: any[],
  loaded: boolean
}

export interface StoreConfig {
  supabaseClient: SupabaseClient
  tableName: string,
  storeData: StoreData,
  selectQuery: string,
  orderQuery: string,
  orderOpts: OrderOpts
}

export async function fillStore (config: StoreConfig) {
  console.debug('getting ' + config.tableName + ' from Supabase')
  await fetchSupabase(config)
    .then((x: any) => {
      console.log(typeof x)
      console.debug(config.tableName + ' loaded from Supabase')
      config.storeData.items = x.data
      config.storeData.loaded = true
    }).catch((x: any) => {
      console.log(typeof x)
      console.error('failed to load ' + config.tableName + ' from Supabase')
      console.error(x.error ? x.error : x)
      config.storeData.loaded = false
    })
}

export async function fetchSupabase (config: StoreConfig) {
  return await config.supabaseClient
    .from(config.tableName)
    .select(config.selectQuery)
    .order(config.orderQuery, config.orderOpts)
}
