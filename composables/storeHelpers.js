// TODO convert into TS type checks

async function fillStore(tableName, store, getFunction) {
    console.debug("getting " + tableName + " from Supabase")
    getFunction(useSupabaseClient())
    .then(x => {
      console.debug(tableName + " loaded from Supabase")
      store.items = x.data
      store.loaded = true
    }).catch(x => {
      console.error("failed to load " + tableName + " from Supabase")
      console.error(x.error)
      store.loaded = false
    })
  }

  async function fetchSupabase(supabase, tableName, selectQuery, orderQuery, orderOpts) {
    return await supabase
      .from(tableName)
      .select(selectQuery)
      .order(orderQuery, orderOpts)
  }

  export { fillStore, fetchSupabase }