<template>
  <header class="shrink-0 flex justify-between bg-white px-4 py-3">
    <a href="/" class="text-2xl bg-white font-black tracking-tight">trello</a>
    <nav class="flex items-center">
      <button
        class="text-sm font-medium px-3 py-2 rounded-md hover:bg-gray-500 mr-5"
        @click="$router.push('/')"
      >
        My boards
      </button>

      <DropDownMenu
        optsButtonClasses="z-10"
        menuButtonClasses=""
        :menuItemsClasses="menuItmsClassesAvatar"
      >
        <template v-slot:menuBtnIcon>
          <img
            src="https://avatars.githubusercontent.com/u/77301038?s=400&u=b9ccb9570e2c2b44541f3b395d4f3f47121ea0f8&v=4"
            alt="avatar"
            class="h-9 w-9 inline-block rounded-full"
          />
        </template>
        <template v-slot:menuItems>
          <MenuItem v-slot="{ active }" v-for="item in optionsAvatar" :key="item.name">
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
              :class="[{ 'hover: bg-gray-100': active }, item.classes]"
              >{{ item.name }}</a
            ></MenuItem
          >
        </template>
      </DropDownMenu>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: 'HeaderMain'
}
</script>

<script lang="ts" setup>
import { MenuItem } from '@headlessui/vue'

const optionsAvatar = [
  { name: 'My profile', classes: '' },
  { name: 'Log out', classes: '' }
]
const menuItmsClassesAvatar =
  'absolute bg-white rounded-md shadow-lg border w-48 focus:outline-none mt-2 origin-top-right right-0'
</script>
