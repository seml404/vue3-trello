<template>
  <div class="w-72 bg-gray-200 flex flex-col rounded-md p-2 max-h-full" draggable="true">
    <div class="flex items-center justify-between px-3 py-2">
      <h3 class="text-sm font-semibold text-gray-500">{{ cardsList.title }}</h3>
      <DropDownMenu
        optsButtonClasses="z-10"
        :menuButtonClasses="menuBtnClassesCard"
        :menuItemsClasses="menuItmsClassesCard"
      >
        <template v-slot:menuBtnIcon>
          <EllipsisHorizontalIcon class="h-5 w-5" />
        </template>
        <template v-slot:menuItems>
          <MenuItem v-slot="{ active }" v-for="opt in optionsCard" :key="opt.name">
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
              :class="[{ 'hover: bg-gray-100': active }, opt.classes]"
              >{{ opt.name }}</a
            ></MenuItem
          >
        </template>
      </DropDownMenu>
    </div>
    <div class="pb-3 flex flex-col overflow-hidden">
      <div class="px-3 overflow-y-auto">
        <ul class="space-y-3">
          <CardItem
            v-for="card in cardsList.cards"
            :key="card.id"
            class="bg-white shadow rounded-md border-b border-gray-300 hover:bg-gray-50 hover:cursor-pointer relative p-4 group"
            draggable="true"
            :card="card"
            @changeCard="changeCard"
          ></CardItem>
        </ul>
      </div>
    </div>
    <div class="mt-4">
      <CreateCardForm :cardsList="cardsList" @createCard="createCard"></CreateCardForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import DropDownMenu from '@/components/UI/DropDownMenu.vue'
import CreateCardForm from '@/components/CreateCardForm.vue'
import CardItem from '@/components/CardItem.vue'
import {
  AdjustmentsHorizontalIcon,
  EllipsisHorizontalIcon,
  PlusIcon
} from '@heroicons/vue/20/solid'
import { ref } from 'vue'
import type { Ref } from 'vue'
import { MenuItem } from '@headlessui/vue'
import type { UserSpace } from '@/types/index'
const props = defineProps<{ cardsList: UserSpace.CardsList }>()
const currentList: Ref<UserSpace.CardsList> = ref({ ...props.cardsList })
const menuBtnClassesCard =
  'focus:outline-none p-1 text-gray-500 bg-white/50 rounded-md hover:bg-white/100 grid place-content-center hover:text-gray-700'
const menuItmsClassesCard =
  'absolute bg-white rounded-md shadow-lg border w-48 focus:outline-none mt-2 origin-top-left left-0'

const optionsCard = [
  { name: 'Edit', classes: '' },
  { name: 'Delete', classes: 'text-red-600' }
]

const createCard = (card: UserSpace.Card) => {
  currentList.value.cards.push(card)
}

const changeCard = (editedItem: UserSpace.Card) => {
  const editedCard = currentList.value.cards.find((card) => card.id === editedItem.id)
  if (editedCard) editedCard.title = editedItem.title
}
</script>

<script lang="ts">
export default {
  name: 'CardsList'
}
</script>
