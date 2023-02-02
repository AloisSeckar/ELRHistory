<template>
    <div>
        <AdminFormSelectItem :label="'Select article:'" :options="articleOptions" :selected="selected" @select-item="changeItem"/>
        Edit article <strong>{{ currentArticleName }}</strong>
        <AdminFormArticle :articleId="articleId" @save="save" />
    </div>
</template>

<script setup lang="ts">
import type { Article, ArticleDB } from '@/database/types'
import { FormKitOptionsItem } from '@formkit/inputs'

const articleId = new Number(useRoute().params.id).valueOf();

const selected: FormKitOptionsItem = reactive({ value: '', label: '' })
const articleOptions = [] as FormKitOptionsItem[];
let currentArticleName: string
for (let i = 0; i < useArticleStore().items.length; i++) {
    const item: Article = useArticleStore().items[i]
    articleOptions.push({ value: item.articleId, label: item.name })
    if (item.articleId === articleId) {
        selected.value = item.articleId
        selected.label = item.name
        currentArticleName = item.name
    }
}

const save = async (article: ArticleDB) => {
    const result = await useArticleStore().update(articleId, JSON.parse(JSON.stringify(article)));
    if (result) {
        useModalStore().showModal("Item saved", "Article was successfully updated");
        return navigateTo('/article/' + articleId)
    } else {
        useModalStore().showModal("Error", "Article wasn't updated");
    }
}
const changeItem = (calback: String) => {
    navigateTo('/admin/edit/article/' + calback)
}
</script>