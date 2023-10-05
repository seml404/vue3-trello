import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserSpace } from '@/types'
import type { ComputedRef } from 'vue'

export const useUserSpaceStore = defineStore('user_space_store', () => {
  const loading = ref<Boolean>(false)
  const setLoading = (value: boolean) => {
    loading.value = value
  }
  const isLoading = computed<Ref<Boolean>>(() => loading)
  const cardEditDisplayed = ref<number | null>(null)
  const setCardEdit = (value: number | null) => {
    cardEditDisplayed.value = value
  }
  const cardEditStatus = computed<Ref<number | null>>(() => cardEditDisplayed)

  const cardAddDisplayed = ref<number | null>(null)
  const setCardAdd = (value: number | null) => {
    cardAddDisplayed.value = value
  }
  const cardAddStatus = computed<Ref<number | null>>(() => cardAddDisplayed)

  return {
    isLoading,
    setLoading,
    setCardEdit,
    cardEditStatus,
    setCardAdd,
    cardAddStatus
  }
})
