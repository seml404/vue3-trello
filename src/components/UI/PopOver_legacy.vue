<template>
  <Popover v-slot="{ open }" :class="'relative'">
    <PopoverButton :class="[open ? '' : 'text-opacity-90', popOverClasses]">
      <PlusIcon class="h-5 w-5"></PlusIcon>
      <span>{{ popOverName }}</span>
    </PopoverButton>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel class="absolute left-1/2 z-10 mt-3 w-65 max-w-sm -translate-x-1/2 px-4 sm:px-0">
        <div
          class="bg-white overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 p-3"
        >
          <slot></slot>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script lang="ts" setup>
import { PlusIcon } from '@heroicons/vue/20/solid'

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
const props = defineProps({
  popOverName: {
    type: String,
    default: '',
    required: false
  },
  popOverClasses: {
    type: String,
    default: '',
    required: false
  }
})
</script>

<script lang="ts">
export default {
  name: 'PopOver'
}
</script>
