<template>
    <div>
        <h1>Add new article</h1>
        <FormKit type="form" @submit="save" submit-label="Add">
            <FormKit
                type="text" name="name" id="name"
                label="Name:" validation="required"
                v-model="article.name" />
            <FormKit
                type="text" name="dscr" id="dscr"
                label="Description:" validation="required"
                v-model="article.dscr" />
            <FormKit
                type="textarea" name="content" id="content"
                label="Content:" validation="required"
                v-model="article.content" />
        </FormKit>
    </div>
</template>

<script setup lang="ts">
import { Article } from '@/composables/useArticleStore'

const article = reactive({name: '', dscr: '', content: ''})

const save = () => {
    console.log(article)
    useArticleStore().save({...article, category_id: '1', date_created: new Date(),  date_edited: new Date(), thumb: '', author_id: '1', gallery_id: null})
}
</script>