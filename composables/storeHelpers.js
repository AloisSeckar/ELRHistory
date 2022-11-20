// TODO convert into TS type checks

async function fillStore(tableName, store, getFunction) {
    console.log("getting " + tableName + " from Supabase")
    getFunction(useSupabaseClient())
    .then(x => {
      console.log(tableName + " loaded from Supabase")
      store.items = x.data
      store.loaded = true
    }).catch(x => {
      console.log("failed to load " + tableName + " from Supabase")
      console.log(x.error)
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