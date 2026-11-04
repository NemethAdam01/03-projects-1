<script setup>
import { useUserStore } from '../store/user.js';
import CreateUserForm from './components/CreateUserForm.vue';
import UsersTable from './components/UsersTable.vue';

const { fetchUsers } = useUserStore();

try {
  fetchUsers();
} catch (error) {
  console.error('Error fetching users:', error);
}


</script>

<template>
  <div class="container">
    <CreateUserForm/>
    <UsersTable/>
  </div>

</template>

<style scoped>

</style>
