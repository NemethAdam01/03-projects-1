<script setup>
import { defineProps } from 'vue';
import { ref, watch } from 'vue';
import { useUserStore } from '../../store/user.js';
const props = defineProps({
  user: {
    type: Object,
    required: true
  }
});

const closeButton = ref();

const userFormData = ref(props.user);
const { modifyUser } = useUserStore();
watch(
  () => props.user,
  (newUser) => {
    userFormData.value = { ...newUser };
  }
);


async function handleSaveButtonClick() {
  try {
    await modifyUser(userFormData.value);
    closeButton.value.click();
  } catch (error) {
    console.error('Error updating user:', error);
  }
}

</script>

<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="editUserModal"
    tabindex="-1"
    aria-labelledby="editUserModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title fs-5" id="editUserModalLabel">Edit user</h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="firstName" class="form-label">Name</label>
              <input type="text" class="form-control" id="firstName" required
                v-model="userFormData.firstName"
              />
            </div>

            <div class="mb-3">
              <label for="lastName" class="form-label">Last Name</label>
              <input type="text" class="form-control" id="lastName" required 
              v-model="userFormData.lastName"/>
            </div>

            <div class="mb-3">
              <label for="userEmail" class="form-label">Email address</label>
              <input type="email" class="form-control" id="userEmail" required 
              v-model="userFormData.emailAdress"/>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button ref="closeButton" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="handleSaveButtonClick">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
