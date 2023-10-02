<template>
  <AuthenticatedLayout>
    <div class="flex flex-col h-screen bg-blue-600">
      <main class="flex-1 overflow-hidden pb-20">
        <div class="flex flex-col h-full">
          <div class="shrink-0 flex justify-between items-center p-6 flex-wrap">
            <!-- <h1 class="text-2xl text-white font-bold">Board title</h1> -->
            <BoardNameForm :board="currentBoard"></BoardNameForm>
            <div>
              <button
                class="text-white bg-white/10 rounded-md p-2 font-medium hover:bg-white/20 flex justify-center items-center"
              >
                <AdjustmentsHorizontalIcon class="h-4 w-4 text-white mr-2" />
                Settings
              </button>
            </div>
          </div>
          <div class="flex-1 overflow-x-auto h-full">
            <div class="inline-flex h-full items-start px-4 space-x-4">
              <div
                v-for="el in lists"
                :key="el.id"
                class="w-72 bg-gray-200 flex flex-col rounded-md p-2 max-h-full"
                draggable="true"
              >
                <div class="flex items-center justify-between px-3 py-2">
                  <h3 class="text-sm font-semibold text-gray-500">{{ el.name }}</h3>
                  <DropDownMenu
                    optsButtonClasses="z-10"
                    :menuButtonClasses="menuBtnClassesCard"
                    :menuItemsClasses="menuItmsClassesCard"
                  >
                    <template v-slot:menuBtnIcon>
                      <EllipsisHorizontalIcon class="h-5 w-5" />
                    </template>
                    <template v-slot:menuItems>
                      <MenuItem v-slot="{ active }" v-for="item in optionsCard" :key="item.name">
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
                          :class="[{ 'hover: bg-gray-100': active }, item.classes]"
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
                <!-- <div class="mt-4">
                  <AddBtn>
                    <template v-slot:addBtnName>Add card</template>
                  </AddBtn>
                </div>-->
              </div>
              <CreateListForm :board="currentBoard" @createList="createList"></CreateListForm>
            </div>
          </div>
        </div>
      </main>
    </div>
  </AuthenticatedLayout>
</template>

<script setup lang="ts">
import {
  AdjustmentsHorizontalIcon,
  EllipsisHorizontalIcon,
  PencilIcon,
  PlusIcon
} from '@heroicons/vue/20/solid'
import { ref } from 'vue'
import { MenuItem } from '@headlessui/vue'
import AuthenticatedLayout from '@/layouts/AuthenaticatedLayout.vue'
import BoardNameForm from '@/components/BoardNameForm.vue'
import CreateListForm from '@/components/CreateListForm.vue'
const menuBtnClassesCard =
  'focus:outline-none p-1 text-gray-500 bg-white/50 rounded-md hover:bg-white/100 grid place-content-center hover:text-gray-700'
const menuItmsClassesCard =
  'absolute bg-white rounded-md shadow-lg border w-48 focus:outline-none mt-2 origin-top-left left-0'

const optionsCard = [
  { name: 'Edit', classes: '' },
  { name: 'Delete', classes: 'text-red-600' }
]
const currentBoard = { name: 'Default board name' }

//mock

const lists = ref([
  { name: 'First list', id: Date.now() },
  { name: 'Second list', id: Date.now() }
])

const createList = (newList: { name: string }) => {
  // lists.value.push(lists.value[lists.value.length - 1]++)
  lists.value.push({ ...newList, id: Date.now() })
}
</script>

<script lang="ts">
export default {
  name: 'MainBoard'
}
</script>
