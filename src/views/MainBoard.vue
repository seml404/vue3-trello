<template>
  <AuthenticatedLayout>
    <div class="flex flex-col h-screen bg-blue-600">
      <main class="flex-1 overflow-hidden pb-20">
        <div class="flex flex-col h-full">
          <div class="shrink-0 flex justify-between items-center p-6 flex-wrap">
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
              <!-- <Draggable
                v-model="cardsLists"
                group="cardsLists"
                class="space-y-3"
                itemKey="id"
                drag-class="drag"
                ghost-class="ghost"
                animation="200"
                @change="handleChange"
              >
                <template #item="{ element }">
                  <CardsList :cardsList="element"></CardsList>
                </template>
              </Draggable>
              <CreateListForm :board="currentBoard" @createList="createList"></CreateListForm> -->
              <CardsList v-for="list in cardsLists" :key="list.id" :cardsList="list"></CardsList>
              <CreateListForm :board="currentBoard" @createList="createList"></CreateListForm>
            </div>
          </div>
        </div>
      </main>
    </div>
  </AuthenticatedLayout>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import type { UserSpace } from '@/types/index'
import { AdjustmentsHorizontalIcon } from '@heroicons/vue/20/solid'
import AuthenticatedLayout from '@/layouts/AuthenaticatedLayout.vue'
import BoardNameForm from '@/components/BoardNameForm.vue'
import CreateListForm from '@/components/CreateListForm.vue'
import CardsList from '@/components/CardsList.vue'

const currentBoard: UserSpace.Board = { title: 'Default board name', id: Date.now() }

//mock
const cardsLists: Ref<UserSpace.CardsList[]> = ref([
  {
    id: 1,
    board_id: currentBoard.id,
    title: 'FirstList',
    cards: [
      { id: 1, title: 'First Card', card_list_id: 1 },
      { id: 2, title: 'Second Card', card_list_id: 1 },
      { id: 3, title: 'Third Card', card_list_id: 1 },
      { id: 4, title: 'Fourth Card', card_list_id: 1 },
      { id: 5, title: 'Fifth Card', card_list_id: 1 },
      { id: 6, title: 'Sixth Card', card_list_id: 1 },
      { id: 7, title: 'Seventh Card', card_list_id: 1 },
      { id: 8, title: 'Eights Card', card_list_id: 1 },
      { id: 9, title: 'Ninth Card', card_list_id: 1 }
    ]
  }
])
const lists = ref([
  { name: 'First list', id: Date.now() },
  { name: 'Second list', id: Date.now() }
])

const createList = (newCardsList: UserSpace.CardsList) => {
  cardsLists.value.push(newCardsList)
  console.log(cardsLists.value)
}

const handleChange = (e: Event) => {
  console.log(e)
}
</script>

<script lang="ts">
export default {
  name: 'MainBoard'
}
</script>
