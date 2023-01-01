const tableName = "elrh_contact"

export const useContactStore = defineStore({
  id: tableName + '-store',
  state: () => {
    return {
      loaded: false,
      items: [] as Contact[],
    }
  },
  actions: {
    async fill() {
      fillStore(tableName, this, getItems)
    }
  },
  getters: {
  },
})

async function getItems(supabase: any) {
  const query = `name, email, phone, fb`
  return fetchSupabase(supabase, tableName, query, 'name', { })
}

type ContactResponse = Awaited<ReturnType<typeof getItems>>
export type Contact = ContactResponse['data']
