<template>
  <div>
    <div class="flex justify-end py-3 px-6 bg-gray-50 border-b">
      <Menu as="div" class="relative">
        <MenuButton class="focus:outline-none">Menu</MenuButton>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 bg-white rounded-md shadow-lg border w-48 focus:outline-none mt-2 origin-top-right"
          >
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
                :class="{ 'hover: bg-gray-100': active }"
                >Option 1</a
              ></MenuItem
            >
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
                :class="{ 'hover: bg-gray-100': active }"
                >Option 2</a
              ></MenuItem
            >
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
                :class="{ 'hover: bg-gray-100': active }"
                >Option 3</a
              ></MenuItem
            >
          </MenuItems>
        </transition>
      </Menu>
    </div>
    <main>Main content</main>
  </div>
</template>

<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>

<script lang="ts">
export default {
  name: 'DropDownMenu',
  components: Menu,
  MenuButton,
  MenuItems,
  MenuItem
}
</script>
