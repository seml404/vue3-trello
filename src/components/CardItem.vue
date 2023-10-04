<template>
  <li
    class="bg-white shadow rounded-md border-b border-gray-300 hover:bg-gray-50 hover:cursor-pointer relative p-4 group"
    draggable="true"
    :key="card.id"
  >
    <a href="" class="">{{ card.title }}</a>
    <button
      class="text-gray-300 hover:text-black absolute top-1 right-1 bg-gray-50 rounded-md place-content-center hover:bg-gray-300 p-1 hidden group-hover:grid"
    >
      <PencilIcon class="h-5 w-5"></PencilIcon>
    </button>
  </li>
</template>

<script setup lang="ts">
import type { UserSpace } from '@/types/index'
import { PencilIcon } from '@heroicons/vue/20/solid'

const props = defineProps<{ card: UserSpace.Card }>()
</script>

<script lang="ts">
export default {
  name: 'CardItem'
}
</script>
