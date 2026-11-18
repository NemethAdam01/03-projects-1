<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="nav">
        <ul>
            <li>
                <!-- <a href=""></a> -->
                 <router-link :to="{name: 'guitarsList'}">Guitars</router-link>
                 
            </li>
            <li>
                <router-link :to="{name:'cart'}">Cart</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped></style>