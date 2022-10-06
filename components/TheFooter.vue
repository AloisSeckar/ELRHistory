<template>
    <div>
        <client-only>
            <div id="footer">
                © {{ year }} <strong>{{ title }} </strong> by <a v-show="website" :href="website">{{ author }}</a><span v-show="!website">>{{ author }}</span>
                powered by <a href="https://v3.nuxtjs.org/">Nuxt3</a>
                | <span><NuxtLink to="/login"><fa icon="fa-solid fa-key" /></NuxtLink></span>
            </div>
        </client-only>
    </div>
</template>

<script setup lang="ts">
    const runtimeConfig = useRuntimeConfig()
    const title = runtimeConfig.public.textTitle
    const author = runtimeConfig.public.textAuthorName
    const website = runtimeConfig.public.textAuthorWebsite
    const year = new Date().getFullYear()
</script>


<style scoped>
    #footer {
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        background-color: #333333;
        color: #cccccc;
        text-align: center;
        padding-bottom: 3px;
        padding-top: 4px;
    }

    #footer > span {
        font-size: 10px;
    }
    
    a:link, a:visited {
        color: #cccccc;
    }

    a:hover, a:active {
        color: white;
    }

  </style>