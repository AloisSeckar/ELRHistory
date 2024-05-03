<template>
  <div>
    <AdminFormSelectItem :label="useTAdminSelect('link')" :options="linkOptions" :selected="selected" @select-item="changeItem" />
    <h2>{{ useTAdminEdit('link') }}: <strong>{{ currentLinkName }}</strong></h2>
    <AdminFormLink :link-id="linkId" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { FormKitOptionsItem } from '@formkit/inputs'
import type { Link, LinkDB } from '@/database/types'

const initStores = async () => {
  await useLinkStore().init()
  await useAuthorStore().init()
  await useCategoryStore().init()
}
await initStores()

const idString = useRoute().params.id as string
const linkId = idString === 'first' ? useLinkStore().getFirstId : parseInt(idString)

const selected = ref(0)
const linkOptions = [] as FormKitOptionsItem[]
let currentLinkName: string
for (let i = 0; i < useLinkStore().items.length; i++) {
  const item: Link = useLinkStore().items[i] as Link
  linkOptions.push({ value: item.linkId, label: item.name })
  if (item.linkId === linkId) {
    selected.value = item.linkId
    currentLinkName = item.name
  }
}

const save = async (link: LinkDB) => {
  await useUpdateItem(useLinkStore().update, 'link', '/links', link, linkId)
}

const changeItem = (callback: number) => {
  navigateTo('/admin/edit/link/' + callback)
}
</script>
