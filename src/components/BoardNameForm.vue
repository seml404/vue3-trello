<template>
  <div class="flex flex-col items-start max-w-full">
    <h1
      :class="[is_visible ? 'absolute -left-[10000px]' : '']"
      class="px-3 py-1.5 text-2xl text-white font-bold hover:bg-white/20 cursor-pointer rounded-md break-all"
      ref="boardHeading"
      @click="handle_edit"
    >
      {{ newBoard.name }}
    </h1>
    <form action="" class="w-full" @submit.prevent="handle_blur">
      <input
        v-show="is_visible"
        @blur="handle_blur"
        ref="boardInput"
        v-model="newBoard.name"
        type="text"
        class="outline-none text-2xl font-bold placeholder-gray-400 px-3 py-1.5 rounded-md focus:outline-2 focus:outline-blue-900 max-w-full"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
const props = defineProps({
  board: { type: Object, required: true }
})
const newBoard = ref({ ...props.board })
const boardHeading = ref()
const boardInput = ref()
const default_name = 'New board name'

const is_visible = ref(false)

const handle_blur = () => {
  is_visible.value = false
  if (!newBoard.value.name) {
    newBoard.value.name = default_name
  }
}

const handle_edit = async () => {
  if (newBoard.value.name === default_name) newBoard.value.name = ''
  boardInput.value.style.width = `${boardHeading.value.offsetWidth + 15}px`
  is_visible.value = true
  await nextTick()
  boardInput.value.focus()
}

watch(newBoard.value, async () => {
  await nextTick()
  console.log(boardInput.value.style.width)

  boardInput.value.style.width = `${boardHeading.value.offsetWidth + 15}px`
})
</script>
