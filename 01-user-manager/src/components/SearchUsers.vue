<script setup>
import {searchUser} from '../../store/user.js';
import { ref } from 'vue';  

const searchQuery = ref('');


</script>

<template>
  <div class="mb-3">
    <label for="searchInput" class="form-label">Search Users</label>
    <input type="text" class="form-control" id="searchInput" placeholder="Search by name" v-model="searchQuery" />
  </div>
</template>