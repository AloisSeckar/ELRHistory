import { Image } from '@/database/types'
import { SupabaseClient } from '@supabase/supabase-js'

const tableName = "elrhImage"

export const useImageStore = defineStore({
    id: tableName + '-store',
    state: () => {
        return {
            loaded: false,
            items: [] as Image[],
        }
    },
    actions: {
        async fill() {
            fillStore(tableName, this, getItems)
        }
    },
    getters: {
        getItems: state => state.items,
        getCount: state => state.items.length,
        getById: (state) => {
            return (imageId: Number) => state.items.find(i => i.imageId == imageId)
        },
        getByGallery: (state) => {
            return (galleryId?: Number, limit?: number) => state.items.filter(i => i.galleryId?.galleryId == galleryId).slice(0, limit)
        },
        getCountByGallery: (state) => {
            return (galleryId: Number) => state.items.filter(i => i.galleryId?.galleryId == galleryId).length
        }
    }
})

async function getItems(supabase: SupabaseClient) {
    const query = `imageId, dateCreated, name, dscr, elrhAuthor(authorId, name), image, galleryId(galleryId, name), ord, prevId, nextId`
    return fetchSupabase(supabase, tableName, query, 'ord', {})
}
