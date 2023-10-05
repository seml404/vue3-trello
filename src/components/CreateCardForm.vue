<template>
  <div class="w-full1 flex flex-col rounded-md">
    <form v-if="showForm" @submit.prevent="handleSubmit">
      <textarea
        v-model="newCard.title"
        rows="3"
        ref="textAreaTitle"
        placeholder="Enter card title"
        class="p-3 inline-block w-full text-sm rounded-md border shadow-sm border-gray-100 focus:outline-blue-400 focus:border-blue-400"
        @keydown.enter.prevent="handleSubmit"
      />
      <div class="mt-2 space-x-2">
        <button
          @click="handleSubmit"
          :disabled="!newCard.title"
          class="mr-2 px-4 py-2 font-medium font-sm text-white bg-rose-600 hover:bg-rose-500 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-rose-500 disabled:bg-gray-300"
        >
          Add new card
        </button>
        <button
          class="px-4 py-2 font-medium font-sm bg-gray-100 text-black rounded-md hover:bg-gray-300"
          @click.prevent="clearForm"
        >
          Cancel
        </button>
      </div>
    </form>
    <AddBtn @click="handleShowForm" v-else>
      <template v-slot:addBtnName>Add card</template>
    </AddBtn>
  </div>
</template>
<script setup lang="ts">
import type { UserSpace } from '@/types/index'
import type { Ref } from 'vue'
import { nextTick, ref, onMounted, onUnmounted, computed } from 'vue'
import AddBtn from '@/components/UI/AddBtn.vue'
import { useUserSpaceStore } from '@/store'

const emit = defineEmits(['createCard'])
const textAreaTitle = ref()
const store = useUserSpaceStore()
const props = defineProps<{ cardsList: UserSpace.CardsList }>()
const default_card = () => {
  return {
    title: '',
    id: Date.now(),
    board_id: props.cardsList.board_id,
    card_list_id: props.cardsList.id,
    classes: ''
  }
}
const newCard: Ref<UserSpace.Card> = ref(default_card())

// const showForm = ref(false)
const showForm = computed(() => {
  return newCard.value.id === store.cardAddStatus.value
})

const handleShowForm = async () => {
  store.setCardAdd(newCard.value.id)
  await nextTick()
  textAreaTitle.value.focus()
}

const clearForm = () => {
  store.setCardAdd(null)
  newCard.value = default_card()
}

const handleEsc = (e: KeyboardEvent) => {
  if (e.key === 'Escape') clearForm()
}

const handleSubmit = () => {
  emit('createCard', { ...newCard.value })
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
  name: 'CreateCardForm'
}
</script>
