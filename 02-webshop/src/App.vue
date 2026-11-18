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
  </div>
</template>

<style scoped></style>
