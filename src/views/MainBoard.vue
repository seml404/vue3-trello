<template>
  <div class="flex flex-col h-screen bg-blue-600">
    <header class="shrink-0 flex justify-between bg-white px-4 py-3">
      <a href="/" class="text-2xl bg-white font-black tracking-tight">trello</a>
      <nav class="flex items-center">
        <a href="#" class="text-sm font-medium px-3 py-2 rounded-md hover:bg-gray-500 mr-5"
          >My boards</a
        >
        <DropDownMenu
          :optsButtonClasses="['z-10']"
          :menuButtonClasses="[]"
          :menuItemsClasses="[...menuItmsClassesAvatar]"
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
                :class="[{ 'hover: bg-gray-100': active }, ...item.classes]"
                >{{ item.name }}</a
              ></MenuItem
            >
          </template>
        </DropDownMenu>
        <!-- <button class="ml-3">
          <img
            src="https://avatars.githubusercontent.com/u/77301038?s=400&u=b9ccb9570e2c2b44541f3b395d4f3f47121ea0f8&v=4"
            alt="avatar"
            class="h-9 w-9 inline-block rounded-full"
          />
        </button> -->
      </nav>
    </header>
    <main class="flex-1 overflow-hidden pb-4">
      <div class="flex flex-col h-full">
        <div class="shrink-0 flex justify-between items-center p-6">
          <h1 class="text-2xl text-white font-bold">Board title</h1>
          <div>
            <button
              class="text-white bg-white/10 rounded-md p-2 font-medium hover:bg-white/20 flex justify-center items-center"
            >
              <AdjustmentsHorizontalIcon class="h-4 w-4 text-white mr-2" />
              Settings
            </button>
          </div>
        </div>
        <div class="flex-1 overflow-x-auto">
          <div class="inline-flex h-full items-start px-4 space-x-4">
            <div
              v-for="el in Array.from(Array(3))"
              :key="el"
              class="w-72 bg-gray-200 flex flex-col rounded-md p-2 max-h-full"
              draggable="true"
            >
              <div class="flex items-center justify-between px-3 py-2">
                <h3 class="text-sm font-semibold text-gray-500">Backlog</h3>
                <DropDownMenu
                  :optsButtonClasses="['z-10']"
                  :menuButtonClasses="[...menuBtnClassesCard]"
                  :menuItemsClasses="[...menuItmsClassesCard]"
                >
                  <template v-slot:menuBtnIcon>
                    <EllipsisHorizontalIcon class="h-5 w-5" />
                  </template>
                  <template v-slot:menuItems>
                    <MenuItem v-slot="{ active }" v-for="item in optionsCard" :key="item.name">
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
                        :class="[{ 'hover: bg-gray-100': active }, ...item.classes]"
                        >{{ item.name }}</a
                      ></MenuItem
                    >
                  </template>
                </DropDownMenu>
              </div>
              <div class="pb-3 flex flex-col overflow-hidden">
                <div class="px-3 overflow-y-auto">
                  <ul class="space-y-3">
                    <li
                      class="bg-white shadow rounded-md border-b border-gray-300 hover:bg-gray-50 hover:cursor-pointer relative p-4 group"
                      draggable="true"
                      v-for="el in Array.from(Array(199))"
                      :key="el"
                    >
                      <a href="" class="">card item</a>
                      <button
                        class="text-gray-300 hover:text-black absolute top-1 right-1 bg-gray-50 rounded-md place-content-center hover:bg-gray-300 p-1 hidden group-hover:grid"
                      >
                        <PencilIcon class="h-5 w-5"></PencilIcon>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mt-4">
                <button
                  class="text-black hover:bg-gray-50 rounded-md place-content-center p-1 flex items-center w-full justify-start"
                >
                  <PlusIcon class="h-5 w-5"></PlusIcon>
                  <span class="ml-1">Add card</span>
                </button>
              </div>
            </div>
            <div class="w-72 flex flex-col rounded-md">
              <button
                class="text-white place-content-center flex items-center w-full justify-start bg-white/10 rounded-md p-2 font-medium hover:bg-white/20"
              >
                <PlusIcon class="h-5 w-5"></PlusIcon>
                <span class="ml-1">Add list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  AdjustmentsHorizontalIcon,
  EllipsisHorizontalIcon,
  PencilIcon,
  PlusIcon
} from '@heroicons/vue/20/solid'
import { MenuItem } from '@headlessui/vue'
const menuBtnClassesCard =
  'focus:outline-none p-1 text-gray-500 bg-white/50 rounded-md hover:bg-white/100 grid place-content-center hover:text-gray-700'.split(
    ' '
  )
const menuItmsClassesCard =
  'absolute bg-white rounded-md shadow-lg border w-48 focus:outline-none mt-2 origin-top-left left-0'.split(
    ' '
  )

const menuItmsClassesAvatar =
  'absolute bg-white rounded-md shadow-lg border w-48 focus:outline-none mt-2 origin-top-right right-0'.split(
    ' '
  )

const optionsCard = [
  { name: 'Edit', classes: [] },
  { name: 'Delete', classes: ['text-red-600'] }
]

const optionsAvatar = [
  { name: 'My profile', classes: [] },
  { name: 'Log out', classes: [] }
]
</script>

<script lang="ts">
export default {
  name: 'MainBoard'
}
</script>
