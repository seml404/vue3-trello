<template>
  <div class="flex flex-col h-screen bg-blue-600">
    <header class="shrink-0 flex justify-between bg-white px-4 py-3">
      <a href="/" class="text-2xl bg-white font-black tracking-tight">trello</a>
      <nav>
        <a href="#" class="text-sm font-medium px-3 py-2 rounded-md hover:bg-gray-500">My boards</a
        >\
        <button class="ml-3">
          <img
            src="https://avatars.githubusercontent.com/u/77301038?s=400&u=b9ccb9570e2c2b44541f3b395d4f3f47121ea0f8&v=4"
            alt="avatar"
            class="h-9 w-9 inline-block rounded-full"
          />
        </button>
      </nav>
    </header>
    <main class="flex-1">content</main>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'MainBoard'
}
</script>
