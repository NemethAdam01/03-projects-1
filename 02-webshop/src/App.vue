<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import { useGuitarStore } from './store/guitars.js'
import MainNavigation from './components/MainNavigation.vue'
import { onMounted } from 'vue'

const { guitars, fetchGuitars } = useGuitarStore()

onMounted(async () => {
  await fetchGuitars()
  console.log('Guitars fetched:', guitars.value)
})
</script>

<template>
  <div>
    <MainNavigation />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped></style>
