<template>
  <div>
    <div class="h-screen bg-gray-100">
      <HeaderMain></HeaderMain>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AuthenticatedLayout'
}
</script>

<script lang="ts" setup>
import HeaderMain from '@/components/UI/HeaderMain.vue'
</script>

<style></style>
