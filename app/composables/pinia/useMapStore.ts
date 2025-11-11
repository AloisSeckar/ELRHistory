import type { StoreData, UpdateConfig } from '@/composables/usePiniaHelpers'
import type { Map, MapDB, SupabaseUpdateData } from '@/../database/types'

const tableName = 'elrhMap'

export const useMapStore = defineStore(tableName + '-store', {
  state: () => {
    return {
      loaded: false,
      items: [] as Map[],
    } as StoreData
  },
  actions: {
    async init(forceReload?: boolean) {
      await useStoreInit({
        supabaseClient: useSupabaseClient(),
        tableName,
        storeData: this,
        selectQuery: 'mapId, title, dscr, coordX, coordY, galleryId, authorId',
        orderQuery: 'title',
        preventSingleLetterOrphans: ['title', 'dscr'],
      }, forceReload)
    },
    async update(itemData: SupabaseUpdateData, itemId?: number): Promise<boolean> {
      treatInput(itemData as MapDB)

      const config: UpdateConfig = {
        supabaseClient: useSupabaseClient<MapDB>(),
        tableName,
        itemKey: 'mapId',
        itemId,
        itemData,
      }

      let ret: boolean
      if (itemId) {
        ret = await useDBUpdate(config)
      } else {
        ret = await useDBCreate(config)
      }

      if (ret) {
        this.init(true) // TODO can we just load the new one?
      }

      return ret
    },
  },
  getters: {
    getItems: state => get(state),
    getCount: state => get(state).length,
    getById: (state) => {
      return (mapId: number) => get(state).find(i => i.mapId === mapId) || { mapId: 0 } as Map
    },
    getEmpty: () => {
      const emptyItem: MapDB = {
        title: '',
        dscr: '',
        coordX: 0,
        coordY: 0,
        galleryId: 0,
        authorId: 0,
      }
      return emptyItem
    },
    getFirstId: (state) => {
      return get(state).at(0)?.mapId || 0
    },
  },
})

function get(state: StoreData) {
  return getStoreItems<Map>(state)
}

function treatInput(_input: MapDB) {
  // no actions at the moment
}
