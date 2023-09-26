<template>
  <AuthenaticatedLayout>
    <div class="h-full bg-gray-50 px-4 py-6">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center mb-4">
          <h3 class="font-black text-gray-700">My boards</h3>
          <!-- <div class="ml-4">
            <AddBtn btnClasses="py-2 px-3 bg-gray-100 rounded font-medium hover:bg-gray-200">
              <template v-slot:addBtnName>Create board</template>
            </AddBtn>
          </div> -->
          <Popover v-slot="{ open }" class="relative">
            <PopoverButton
              :class="open ? '' : 'text-opacity-90'"
              class="group inline-flex items-center text-base hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 py-2 px-3 bg-gray-100 rounded font-medium hover:bg-gray-200 ml-2"
            >
              <PlusIcon class="h-5 w-5"></PlusIcon>
              <span class="ml-1">Solutions</span>
            </PopoverButton>

            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="translate-y-1 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="translate-y-0 opacity-100"
              leave-to-class="translate-y-1 opacity-0"
            >
              <PopoverPanel
                class="absolute left-1/2 z-10 mt-3 max-w-sm -translate-x-1/2 px-4 sm:px-0 w-72 bg-white"
              >
                <div
                  class="p-3 overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                >
                  test
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </div>
        <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <li
            class="relative bg-blue-600 hover:bg-blue-700 rounded-md min-h-[7rem]"
            v-for="el in 20"
            :key="el"
          >
            <a href="#" class="text-white text-lg font-bold absolute inset-0 p-2">Board {{ el }}</a>
          </li>
        </ul>
      </div>
    </div></AuthenaticatedLayout
  >
</template>

<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { PlusIcon } from '@heroicons/vue/20/solid'
import AuthenaticatedLayout from '@/layouts/AuthenaticatedLayout.vue'
</script>

<script lang="ts">
export default {
  name: 'BoardsList'
}
</script>
