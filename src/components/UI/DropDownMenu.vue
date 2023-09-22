<template>
  <Menu as="div" :class="['relative', ...optsButtonClasses]">
    <div>
      <MenuButton :class="['focus:outline-none', ...menuButtonClasses]">
        {{ menuBtnName || null }}
        <slot name="menuBtnIcon"></slot>
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems :class="menuItemsClasses">
        <slot name="menuItems"></slot>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
const props = defineProps({
  menuBtnName: {
    type: String,
    default: '',
    required: false
  },
  optsButtonClasses: {
    type: String,
    default: '',
    required: false
  },
  menuButtonClasses: {
    type: String,
    default: '',
    required: false
  },
  menuItemsClasses: {
    type: String,
    default:
      'absolute right-0 bg-white rounded-md shadow-lg border w-48 focus:outline-none mt-2 origin-top-right',
    required: false
  }
})
</script>

<script lang="ts">
export default {
  name: 'DropDownMenu',
  components: Menu,
  MenuButton,
  MenuItems
}
</script>
