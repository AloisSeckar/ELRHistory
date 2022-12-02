<template>
    <div>
        <ItemArticle v-for="article in useArticleStore().items" :item="article" />
    </div>
</template>
