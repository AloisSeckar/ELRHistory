<template>
  <div>
    <AdminFormSelectItem :label="'Select news:'" :options="newsOptions" :selected="selected" @select-item="changeItem" />
    <h2>Edit news <strong>{{ currentNewsName }}</strong></h2>
    <AdminFormNews :news-id="newsId" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { FormKitOptionsItem } from '@formkit/inputs'
import type { News, NewsDB } from '@/database/types'

const initStores = async () => {
  await useNewsStore().init()
  await useAuthorStore().init()
}
await initStores()

const idString = useRoute().params.id as string
const newsId = idString === 'first' ? useNewsStore().getFirstId : parseInt(idString)

const selected: FormKitOptionsItem = reactive({ value: '', label: '' })
const newsOptions = [] as FormKitOptionsItem[]
let currentNewsName: string
for (let i = 0; i < useNewsStore().items.length; i++) {
  const item: News = useNewsStore().items[i] as News
  newsOptions.push({ value: item.newsId, label: item.title })
  if (item.newsId === newsId) {
    selected.value = item.newsId
    selected.label = item.title
    currentNewsName = item.title
  }
}

const save = async (news: NewsDB) => {
  await useUpdateItem(useNewsStore(), 'news', '/news', news, newsId)
}

const changeItem = (calback: String) => {
  navigateTo('/admin/edit/news/' + calback)
}
</script>
