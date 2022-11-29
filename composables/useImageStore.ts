import { defineStore } from 'pinia'

const tableName = "elrh_image"

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
        getById: (state) => {
            return (image_id: Number) => state.items.find(i => i.image_id == image_id)
        },
        getByGallery: (state) => {
            return (gallery_id?: Number, limit?: number) => state.items.filter(i => i.gallery_id == gallery_id).slice(0, limit)
        }
    }
})

async function getItems(supabase: any) {
    // TODO author and gallery name
    const query = `image_id, date_created, name, dscr, author_id, image, gallery_id, ord, prev_id, next_id`
    return fetchSupabase(supabase, tableName, query, 'ord', {})
}

type ImageResponse = Awaited<ReturnType<typeof getItems>>
export type Image = ImageResponse['data']
