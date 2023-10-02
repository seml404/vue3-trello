<template>
  <div class="w-72 flex flex-col rounded-md">
    <form class="p-3 bg-gray-200 rounded-md" v-if="showForm" @submit.prevent="handleSubmit">
      <input
        v-model="newList.name"
        ref="formInput"
        type="text"
        placeholder="Enter new list name"
        class="p-3 inline-block w-full text-sm rounded-md border shadow-sm border-gray-100 focus:outline-blue-400 focus:border-blue-400"
      />
      <div class="mt-2 space-x-2">
        <button
          @click="handleSubmit"
          class="mr-2 px-4 py-2 font-medium font-sm text-white bg-rose-600 hover:bg-rose-500 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-rose-500"
        >
          Add new list
        </button>
        <button
          class="px-4 py-2 font-medium font-sm bg-gray-100 text-black rounded-md hover:bg-gray-300"
          @click.prevent="clearForm"
        >
          Cancel
        </button>
      </div>
    </form>
    <AddBtn
      @click="handleShowForm"
      v-else
      btnClasses="text-white place-content-center flex items-center w-full justify-start bg-white/10 rounded-md p-2 font-medium hover:bg-white/20"
    >
      <template v-slot:addBtnName>Add list</template>
    </AddBtn>
  </div>
</template>
<script setup lang="ts">
import { nextTick, ref, onMounted, onUnmounted } from 'vue'
import AddBtn from '@/components/UI/AddBtn.vue'
const props = defineProps({
  board: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['createList'])
const formInput = ref()
const newList = ref({ name: '' })
const showForm = ref(false)

const handleShowForm = async () => {
  showForm.value = true
  await nextTick()
  formInput.value.focus()
}

const clearForm = () => {
  showForm.value = false
  newList.value.name = ''
}

const handleEsc = (e: KeyboardEvent) => {
  if (e.key === 'Escape') clearForm()
}

const handleSubmit = () => {
  emit('createList', newList.value)
  clearForm()
}

onMounted(() => {
  document.addEventListener('keydown', handleEsc)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEsc)
})
</script>

<script lang="ts">
export default {
  name: 'CreateListForm'
}
</script>
