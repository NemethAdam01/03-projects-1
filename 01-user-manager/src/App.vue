<script setup>
import { useUserStore } from '../store/user.js';
import CreateUserForm from './components/CreateUserForm.vue';
import SearchUsers from './components/SearchUsers.vue';
import UsersTable from './components/UsersTable.vue';

const { fetchUsers } = useUserStore();

try {
  fetchUsers();
} catch (error) {
  console.error('Error fetching users:', error);
}


</script>

<template>
  <SearchUsers/>
  <div class="container">
    <CreateUserForm/>
    <UsersTable/>
  </div>

</template>

<style scoped>

</style>
