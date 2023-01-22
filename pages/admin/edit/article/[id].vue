<template>
    <div>
        <AdminFormSelectItem :label="'Select article:'" :options="articleOptions" :selected="selected" @select-item="changeItem"/>
        Edit article <strong>{{ article.name }}</strong>
        <AdminFormArticle :article="article" @save="save" />
    </div>
</template>

<script setup lang="ts">
import type { Article, ArticleDB } from '@/database/types'
import { FormKitOptionsItem } from '@formkit/inputs'

const id = new Number(useRoute().params.id);

const selected: FormKitOptionsItem = reactive({ value: '', label: '' })
const articleOptions = [] as FormKitOptionsItem[];
for (let i = 0; i < useArticleStore().items.length; i++) {
    const item: Article = useArticleStore().items[i]
    articleOptions.push({ value: item.article_id, label: item.name })
    if (item.article_id == id) {
        selected.value = item.article_id
        selected.label = item.name
    }
}

const {article_id, ...currentArticle} = useArticleStore().getById(id)
const article: ArticleDB = reactive(JSON.parse(JSON.stringify(currentArticle)));

if (currentArticle.elrh_author) {
    article.author_id = currentArticle.elrh_author.author_id;
}
if (currentArticle.elrh_category) {
    article.category_id = currentArticle.elrh_category.category_id;
}
article.gallery_id = currentArticle?.elrh_gallery?.gallery_id;

delete article.elrh_author;
delete article.elrh_category;
delete article.elrh_gallery;

const save = () => {
    // TODO category and gallery not changing
    useArticleStore().update(article_id, JSON.parse(JSON.stringify(article)));
}
const changeItem = (calback: String) => {
    navigateTo('/admin/edit/article/' + calback)
}
</script>