<template>
  <div>
    <AdminFormSelectItem :label="'Select link:'" :options="linkOptions" :selected="selected" @select-item="changeItem" />
    Edit link <strong>{{ currentLinkName }}</strong>
    <AdminFormLink :link-id="linkId" @save="save" />
  </div>
</template>

<script setup lang="ts">
import { FormKitOptionsItem } from '@formkit/inputs'
import type { Link, LinkDB } from '@/database/types'

const idString = useRoute().params.id as string
const linkId = parseInt(idString)

const selected: FormKitOptionsItem = reactive({ value: '', label: '' })
const linkOptions = [] as FormKitOptionsItem[]
let currentLinkName: string
for (let i = 0; i < useLinkStore().items.length; i++) {
  const item: Link = useLinkStore().items[i] as Link
  linkOptions.push({ value: item.linkId, label: item.name })
  if (item.linkId === linkId) {
    selected.value = item.linkId
    selected.label = item.name
    currentLinkName = item.name
  }
}

const save = async (link: LinkDB) => {
  await useUpdateItem(useLinkStore(), link, linkId, 'link', '/links')
}

const changeItem = (calback: String) => {
  navigateTo('/admin/edit/link/' + calback)
}

onBeforeMount(async () => {
  await useLinkStore().fill()
  await useAuthorStore().fill()
  await useCategoryStore().fill()
})
</script>
