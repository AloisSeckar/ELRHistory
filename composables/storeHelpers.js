// TODO convert into TS type checks

export async function fillStore (tableName, store, getFunction) {
  console.debug('getting ' + tableName + ' from Supabase')
  await getFunction(useSupabaseClient())
    .then((x) => {
      console.debug(tableName + ' loaded from Supabase')
      store.items = x.data
      store.loaded = true
    }).catch((x) => {
      console.error('failed to load ' + tableName + ' from Supabase')
      console.error(x.error ? x.error : x)
      store.loaded = false
    })
}

export async function fetchSupabase (supabase, tableName, selectQuery, orderQuery, orderOpts) {
  return await supabase
    .from(tableName)
    .select(selectQuery)
    .order(orderQuery, orderOpts)
}
