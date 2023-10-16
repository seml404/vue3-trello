<template>
  <li>
    <div v-if="!showForm">
      <a href="" class="">{{ card.title }}</a>
      <button
        @click="handleShowForm"
        class="text-gray-300 hover:text-black absolute top-1 right-1 bg-gray-50 rounded-md place-content-center hover:bg-gray-300 p-1 hidden group-hover:grid"
      >
        <PencilIcon class="h-5 w-5"></PencilIcon>
      </button>
    </div>
    <template v-else>
      <form @submit.prevent="handleSubmit">
        <textarea
          v-model="editableCard.title"
          rows="3"
          ref="textAreaTitle"
          placeholder="Enter card title"
          class="p-3 inline-block w-full text-sm rounded-md border shadow-sm border-gray-100 focus:outline-blue-400 focus:border-blue-400"
          @keydown.enter.prevent="handleSubmit"
        />
        <div class="mt-2 space-x-2">
          <button
            @click="handleSubmit"
            :disabled="!editableCard.title"
            class="mr-2 px-4 py-2 font-medium font-sm text-white bg-rose-600 hover:bg-rose-500 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-rose-500 disabled:bg-gray-300"
          >
            Save card
          </button>
          <button
            class="px-4 py-2 font-medium font-sm bg-gray-100 text-black rounded-md hover:bg-gray-300"
            @click.prevent="clearForm"
          >
            Cancel
          </button>
        </div>
      </form>
    </template>
  </li>
</template>

<script setup lang="ts">
import type { UserSpace } from '@/types/index'
import { PencilIcon } from '@heroicons/vue/20/solid'
import type { Ref } from 'vue'
import { nextTick, ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useUserSpaceStore } from '@/store'
const props = defineProps<{ card: UserSpace.Card }>()
const store = useUserSpaceStore()
const emit = defineEmits(['changeCard'])
const textAreaTitle = ref()

const editableCard: Ref<UserSpace.Card> = ref({ ...props.card })

// const showForm = ref(false)

const showForm = computed(() => {
  return store.cardEditStatus.value === props.card.id
})

const handleShowForm = async () => {
  if (store.cardEditStatus) {
    store.setCardEdit(props.card.id)
  }
  await nextTick()
  textAreaTitle.value.focus()
}

const clearForm = () => {
  store.setCardEdit(null)
  editableCard.value = { ...props.card }
}

const handleEsc = (e: KeyboardEvent) => {
  if (e.key === 'Escape') clearForm()
}

const handleSubmit = () => {
  emit('changeCard', { ...editableCard.value })
  store.setCardEdit(null)
}

onMounted(() => {
  document.addEventListener('keydown', handleEsc)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEsc)
})

const notChaged = computed(() => {
  return editableCard.value.title === props.card.title
})
</script>

<script lang="ts">
export default {
  name: 'CardItem'
}
</script>

<style lang="scss" scoped>
.drag {
  background-color: yellow;
}
.ghost {
  background-color: red;
}
</style>
