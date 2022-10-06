<template>
    <div>
        <NuxtLink to="/">
          <div id="header"></div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
  const goHome = async () => {
    await navigateTo('/')
  }
</script>

<style scoped>
    #header {
      width: 100%;
      height: 120px;
      background-image: url('/header.png');
      background-position: center;
      background-repeat: repeat-x;
      background-size: auto 120px;
      cursor: pointer;
    }
  </style>