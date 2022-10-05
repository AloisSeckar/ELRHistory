<template>
    <footer>
        <client-only>
            <div>
                © {{ year }} <strong>{{ title }} </strong> by <a v-show="website" :href="website">{{ author }}</a><span v-show="!website">>{{ author }}</span>
                powered by <a href="https://v3.nuxtjs.org/">Nuxt3</a>
                | <span><a href="/login"><fa icon="fa-solid fa-key" /></a></span>
            </div>
        </client-only>
    </footer>
</template>

<script setup lang="ts">
    const runtimeConfig = useRuntimeConfig()
    const title = runtimeConfig.public.textTitle
    const author = runtimeConfig.public.textAuthorName
    const website = runtimeConfig.public.textAuthorWebsite
    const year = new Date().getFullYear()
</script>


<style scoped>
    footer {
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        background-color: #333333;
        color: #cccccc;
    }
    footer > div {
        margin: 5px;
        text-align: center;
    }
    footer > div > span {
        font-size: 10px;
    }
    
    a:link, a:visited {
        color: #cccccc;
    }

    a:hover, a:active {
        color: white;
    }

  </style>