<script setup>
import { ref } from 'vue';
const isFormVisible = ref(false);

function showForm() {
  isFormVisible.value = true;
}
</script>

<template>
    <button class="btn btn-primary mb-3" v-show="!isFormVisible" @click="showForm">Create new user</button>
  <form v-show="isFormVisible">
    <div class="mb-3">
      <label for="firstName" class="form-label">First Name</label>
      <input type="text" class="form-control" id="firstName" required />
    </div>

    <div class="mb-3">
      <label for="lastName" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="lastName" required />
    </div>

    <div class="mb-3">
      <label for="userEmail" class="form-label">Email address</label>
      <input type="email" class="form-control" id="userEmail" required />
    </div>

    <button type="submit" class="btn btn-primary">Create user</button>
  </form>
</template>