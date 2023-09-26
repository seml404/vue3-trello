<template>
  <button :class="[defaultBtnClasses, btnClasses]">
    <PlusIcon class="h-5 w-5"></PlusIcon>
    <span :class="btnNameClass">
      <slot name="addBtnName"></slot>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { PlusIcon } from '@heroicons/vue/20/solid'
const defaultBtnClasses =
  'text-black hover:bg-gray-50 rounded-md place-content-center p-1 flex items-center w-full justify-start'
const props = defineProps({
  btnClasses: {
    type: String,
    default: '',
    required: false
  },
  btnNameClass: {
    type: String,
    default: 'ml-1',
    required: false
  }
})
</script>

<script lang="ts">
export default {
  name: 'AddBtn'
}
</script>
