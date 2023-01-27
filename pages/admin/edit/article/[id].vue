<template>
    <div>
        <AdminFormSelectItem :label="'Select article:'" :options="articleOptions" :selected="selected" @select-item="changeItem"/>
        Edit article <strong>{{ currentArticleName }}</strong>
        <AdminFormArticle :article_id="article_id" @save="save" />
    </div>
</template>

<script setup lang="ts">
import type { Article, ArticleDB } from '@/database/types'
import { FormKitOptionsItem } from '@formkit/inputs'

const article_id = new Number(useRoute().params.id).valueOf();

const selected: FormKitOptionsItem = reactive({ value: '', label: '' })
const articleOptions = [] as FormKitOptionsItem[];
let currentArticleName: string
for (let i = 0; i < useArticleStore().items.length; i++) {
    const item: Article = useArticleStore().items[i]
    articleOptions.push({ value: item.article_id, label: item.name })
    if (item.article_id === article_id) {
        selected.value = item.article_id
        selected.label = item.name
        currentArticleName = item.name
    }
}

const save = (article: ArticleDB) => {
    useArticleStore().update(article_id, JSON.parse(JSON.stringify(article)));
    return navigateTo('/article/' + article_id)
}
const changeItem = (calback: String) => {
    navigateTo('/admin/edit/article/' + calback)
}
</script>