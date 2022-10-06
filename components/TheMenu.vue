<template>
    <div>
        <div id="menu">
            <NuxtLink to="/">Index</NuxtLink>
            <NuxtLink to="/gallery">Gallery</NuxtLink>
            <NuxtLink to="/articles">Articles</NuxtLink>
            <NuxtLink to="/books">Books</NuxtLink>
            <NuxtLink to="/links">Links</NuxtLink>
        </div>
    </div>
</template>

<style scoped>
    #menu {
        background-color: #000033;
        text-align: center;
        padding: 5px;
    }

    a {
        margin: 5px;
    }

    a:link, a:visited {
        color: #cccccc;
    }

    a:hover, a:active {
        color: white;
    }


</style>