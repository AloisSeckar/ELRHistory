<template>
    <div>
        <h2>Supabase connection DEMO</h2>
        <div v-for="item in data">
            {{ item.date_created }} {{ item.content }}
        </div>
    </div>
  </template>
  
  <script setup>
    const supabase = useSupabaseClient()
    const loading = ref(true)
    loading.value = true
    const user = useSupabaseUser();
    let { data } = await supabase
        .from('web_news')
        .select(`date_created, content`)
    if (data) {
        // process data?
    }
    loading.value = false
  </script>