<template>
  <AuthenaticatedLayout>
    <div class="h-full bg-gray-50 px-4 py-6">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center">
          <h3 class="font-black text-gray-700">My boards</h3>
          <button>Create board</button>
        </div>
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
