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
  const result = await useLinkStore().update(JSON.parse(JSON.stringify(link)), linkId)
  if (result) {
    useModalStore().showModal('Item saved', 'Link was successfully updated')
    return navigateTo('/links')
  } else {
    useModalStore().showModal('Error', "Link wasn't updated")
  }
}
const changeItem = (calback: String) => {
  navigateTo('/admin/edit/link/' + calback)
}
</script>
