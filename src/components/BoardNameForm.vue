<template>
  <div class="flex flex-col items-start">
    <h1 class="px-3 py-1.5 text-2xl text-white font-bold" ref="boardHeading">
      {{ newBoard.name }}
    </h1>
    <form action="" class="">
      <input
        ref="boardInput"
        v-model="newBoard.name"
        type="text"
        placeholder="boardname"
        class="outline-none text-2xl font-bold placeholder-gray-400 px-3 py-1.5 rounded-md focus:outline-2 focus:outline-blue-900"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const props = defineProps({
  board: { type: Object, required: true }
})
const newBoard = ref({ ...props.board })
const boardHeading = ref()
const boardInput = ref()

watch(newBoard.value, () => {
  console.log(boardInput.value.style.width)
  boardInput.value.style.width = `${boardHeading.value.offsetWidth}px`
})
</script>
