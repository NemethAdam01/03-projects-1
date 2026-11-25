<script setup>
import GuitarImage from './GuitarImage.vue';
defineProps({
    guitar:{
        type: Object,
        required: true
    }
})
</script>

<template>
    <div>
        <div class="left-column">
            <GuitarImage :title="guitar.title"/>
        </div>
        <div class="right-column">
            <h2>{{ guitar.title }}</h2>
            <p>{{ guitar.description }}</p>
            <p>{{ guitar.price }}$</p>
        </div>
    </div>
</template>

<style scoped></style>