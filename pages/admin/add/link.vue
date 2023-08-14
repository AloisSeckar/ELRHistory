<template>
  <div>
    <h1>Add new link</h1>
    <AdminFormLink :link-id="-1" @save="save" />
  </div>
</template>

<script setup lang="ts">
import { LinkDB } from '@/database/types'

const save = async (link: LinkDB) => {
  const result = await useLinkStore().update(JSON.parse(JSON.stringify(link)))
  if (result) {
    useModalStore().showModal('Item saved', 'Link was successfully created')
    return navigateTo('/links')
  } else {
    useModalStore().showModal('Error', "Link wasn't created")
    // TODO preserve input if error occured
  }
}
</script>
