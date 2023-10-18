<template>
  <div
    class="flex flex-col items-start max-w-full relative"
    v-if="type === UserSpaceNames.Elements.BOARD"
  >
    <h1
      :class="[is_visible ? 'invisible' : '']"
      class="px-3 py-1.5 text-2xl text-white font-bold hover:bg-white/20 cursor-pointer rounded-md whitespace-pre overflow-hidden text-ellipsis w-full"
      ref="itemHeading"
      @click="handle_edit"
    >
      {{ item.title ? item.title : ' ' }}
    </h1>
    <form action="" class="max-w-full" @submit.prevent="handle_blur">
      <input
        v-show="is_visible"
        @blur="handle_blur"
        ref="itemInput"
        v-model="item.title"
        type="text"
        class="outline-none text-2xl font-bold placeholder-gray-400 px-3 py-1.5 rounded-md focus:outline-2 focus:outline-blue-900 w-full absolute inset-0"
      />
    </form>
  </div>
  <div
    class="flex flex-col items-start max-w-full relative"
    v-else-if="type === UserSpaceNames.Elements.CARDS_LIST"
  >
    <h3
      :class="[is_visible ? 'invisible' : '']"
      class="px-3 py-1.5 text-sm font-semibold text-gray-500 hover:bg-white/20 cursor-pointer rounded-md whitespace-pre overflow-hidden text-ellipsis w-full"
      ref="itemHeading"
      @click="handle_edit"
    >
      {{ item.title ? item.title : ' ' }}
    </h3>
    <form action="" class="max-w-full" @submit.prevent="handle_blur">
      <input
        v-show="is_visible"
        @blur="handle_blur"
        ref="itemInput"
        v-model="item.title"
        type="text"
        class="outline-none text-sm font-semibold text-gray-500 placeholder-gray-400 px-3 py-1.5 rounded-md focus:outline-2 focus:outline-blue-900 w-full absolute inset-0"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import type { UserSpace } from '@/types/index'
import { ref, watch, onMounted, nextTick, computed } from 'vue'
import { UserSpaceNames } from '@/enums'
const props = defineProps<{ item: UserSpace.Board | UserSpace.CardsList }>()
const item = ref({ ...props.item, id: Date.now() })
const itemHeading = ref()
const itemInput = ref()
const default_name = 'New name'
const is_visible = ref(false)

const handle_blur = () => {
  is_visible.value = false
  if (!item.value.title) {
    item.value.title = default_name
  }
}

const handle_edit = async () => {
  if (item.value.title === default_name) item.value.title = ''
  // boardInput.value.style.width = `${boardHeading.value.offsetWidth + 15}px`
  is_visible.value = true
  await nextTick()
  itemInput.value.focus()
}

watch(item.value, async () => {
  await nextTick()

  // boardInput.value.style.width = `${boardHeading.value.offsetWidth + 15}px`
})

const type = computed(() => {
  if ('card_lists' in props.item) return UserSpaceNames.Elements.BOARD
  else if ('board_id' in props.item) return UserSpaceNames.Elements.CARDS_LIST
  else return null
})
</script>

<script lang="ts">
export default {
  name: 'EditNameForm'
}
</script>
