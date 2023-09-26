<template>
  <AuthenaticatedLayout>
    <div class="h-full bg-gray-50 px-4 py-6">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center mb-4">
          <h3 class="font-black text-gray-700">My boards</h3>
          <div class="ml-4">
            <AddBtn btnClasses="py-2 px-3 bg-gray-100 rounded font-medium hover:bg-gray-200">
              <template v-slot:addBtnName>Create board</template>
            </AddBtn>
          </div>
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
import AuthenaticatedLayout from '@/layouts/AuthenaticatedLayout.vue'
</script>

<script lang="ts">
export default {
  name: 'BoardsList'
}
</script>
