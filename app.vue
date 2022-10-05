<template>
  <div>
    <TheHeader />
    <h1>{{ title }}</h1>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
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
</script>

<style>
  #main {
    margin: 0px;
    background-color: #faebd7;
    font-family: "Helvetica Neue";
    font-size: 14;
    text-align: center;
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