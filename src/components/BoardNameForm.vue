<template>
  <div>
    <h1 class="px-3 py-1.5 text-2xl text-white font-bold">{{ newBoard.name }}</h1>
    <form action="">
      <input
        v-model="newBoard.name"
        type="text"
        placeholder="boardname"
        class="outline-none text-2xl font-bold placeholder-gray-400 px-3 py-1.5 rounded-md focus:outline-2 focus:outline-blue-900"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  board: { type: Object, required: true }
})

const newBoard = ref({ ...props.board })
</script>
