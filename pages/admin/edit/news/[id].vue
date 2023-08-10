<template>
  <div>
    <AdminFormSelectItem :label="'Select news:'" :options="newsOptions" :selected="selected" @select-item="changeItem" />
    Edit news <strong>{{ currentNewsName }}</strong>
    <AdminFormNews :news-id="newsId" @save="save" />
  </div>
</template>

<script setup lang="ts">
import { FormKitOptionsItem } from '@formkit/inputs'
import type { News, NewsDB } from '@/database/types'

const idString = useRoute().params.id as string
const newsId = parseInt(idString)

const selected: FormKitOptionsItem = reactive({ value: '', label: '' })
const newsOptions = [] as FormKitOptionsItem[]
let currentNewsName: string
for (let i = 0; i < useNewsStore().items.length; i++) {
  const item: News = useNewsStore().items[i]
  newsOptions.push({ value: item.newsId, label: item.content.substring(0, 50) + '[...]' })
  if (item.newsId === newsId) {
    selected.value = item.newsId
    selected.label = item.content.substring(0, 50) + '[...]'
    currentNewsName = item.content.substring(0, 50) + '[...]'
  }
}

const save = async (news: NewsDB) => {
  const result = await useNewsStore().update(JSON.parse(JSON.stringify(news)), newsId)
  if (result) {
    useModalStore().showModal('Item saved', 'News was successfully updated')
    return navigateTo('/news')
  } else {
    useModalStore().showModal('Error', "News wasn't updated")
  }
}
const changeItem = (calback: String) => {
  navigateTo('/admin/edit/news/' + calback)
}
</script>
