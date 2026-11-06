<script setup>
import { ref, reactive } from 'vue';
import { useUserStore } from '../../store/user.js';

const { addUser } = useUserStore()
const isFormVisible = ref(false);
const createUserForm = ref();
const userFormDataInitialState = {
  firstName: '',
  lastName: '',
  email: ''
};
const UserFormData = reactive(userFormDataInitialState)

function showForm() {
  isFormVisible.value = true;
}

async function handleSaveClick() {
  try {
    if (createUserForm.value.checkValidity()){
      await addUser(UserFormData);
      Object.assign(userFormDataInitialState, UserFormData);
    }
    addUser(UserFormData);
    isFormVisible.value = false;
  
  } catch (error) {
    console.error('Error adding user:', error);
  }

}

function handleCancelClick() {
  isFormVisible.value = false;
}
</script>

<template>
  <button class="btn btn-primary mb-3" v-show="!isFormVisible" @click="showForm">Create new user</button>
  <form v-show="isFormVisible" ref="createUserForm">
    <div class="mb-3">
      <label for="firstName" class="form-label">First Name</label>
      <input type="text" class="form-control" id="firstName" required v-model="UserFormData.firstName" />
    </div>

    <div class="mb-3">
      <label for="lastName" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="lastName" required v-model="UserFormData.lastName" />
    </div>

    <div class="mb-3">
      <label for="userEmail" class="form-label">Email address</label>
      <input type="email" class="form-control" id="userEmail" required v-model="UserFormData.email" />
    </div>

    <div class="mb-3">
      <button type="button" class="btn btn-primary" @click="handleSaveClick">Save</button>

      <button type="button" class="btn btn-secondary" @click="handleCancelClick">Cancel</button>
    </div>
  </form>
</template>