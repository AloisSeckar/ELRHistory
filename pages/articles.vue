<template>
    <div>
        <div class="box" v-for="article in articles.items">
            <div class="box-header">
                {{ article.name }}
                <span class="float-right">
                    <em>{{ article.elrh_author.name }}, {{ article.date_created?.split('T')[0] }}</em>
                </span>
            </div>
            <div class="box-content flex">
                <div class="flex-none pr-2">
                    <img :src="article.thumb" :alt="article.name" :width="120" />
                </div>
                <div class="flex-1">
                    <div class="pb-1">{{ article.dscr }}</div>
                    <hr />
                    <div class="pt-1" v-html="article.content.substring(0,200) + '[...]'"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const articles = useArticleStore()
if (!articles.loaded) {
    await articles.fill()
}
</script>