<template>
    <div>
        <h2>Supabase connection DEMO</h2>
        <div v-for="item in useNewsStore().getNews">
            {{ item.date_created }} {{ item.content }}
        </div>
    </div>
  </template>
  
  <script setup>
    const news = useNewsStore()
  </script>