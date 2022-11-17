<template>
  <div>
    <TheHeader />
    <TheMenu />
    <h1 class="ml-32 mb-2 font-sans font-bold text-4xl text-navy">{{ title }}</h1>
    <div class="mx-32 mb-12">
      <NuxtPage />
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import './assets/css/tailwind.css'

const runtimeConfig = useRuntimeConfig()
const title = runtimeConfig.public.textTitle
useHead({
  title: title,
  bodyAttrs: {
    id: 'main',
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
  ]
});

useNewsStore().fill()

</script>

<style>
#main {
  margin: 0px;
  background-color: #faebd7;
  font-family: "Helvetica Neue";
  font-size: 14;
  text-align: justify;
}

#header {
  width: 100%;
  height: 120px;
  background-image: url('/header.png');
  background-position: center;
  background-repeat: repeat-x;
  background-size: auto 120px;
}
</style>