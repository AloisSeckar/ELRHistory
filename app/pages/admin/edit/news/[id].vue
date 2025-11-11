<template>
  <div>
    <AdminFormSelectItem :label="useTAdminSelect('news')" :options="newsOptions" :selected="selected" @select-item="changeItem" />
    <h2>{{ useTAdminEdit('news') }}: <strong>{{ currentNewsName }}</strong></h2>
    <AdminFormNews :news-id="newsId" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { FormKitOptionsItem } from '@formkit/inputs'
import type { News, NewsDB } from '@/../database/types'

const initStores = async () => {
  await useNewsStore().init()
  await useAuthorStore().init()
}
await initStores()

const idString = useRoute().params.id as string
const newsId = idString === 'first' ? useNewsStore().getFirstId : parseInt(idString)

const selected = ref(0)
const newsOptions = [] as FormKitOptionsItem[]
let currentNewsName: string
for (let i = 0; i < useNewsStore().items.length; i++) {
  const item: News = useNewsStore().items[i] as News
  newsOptions.push({ value: item.newsId, label: item.title })
  if (item.newsId === newsId) {
    selected.value = item.newsId
    currentNewsName = item.title
  }
}

const save = async (news: NewsDB) => {
  await useUpdateItem(useNewsStore().update, 'news', '/news', news, newsId)
}

const changeItem = (callback: number) => {
  navigateTo('/admin/edit/news/' + callback)
}
</script>
