<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { useComponentTranslation } from '@/composables/useComponentTranslation'
import SelectOptions from './SelectOptions.vue'

defineOptions({ inheritAttrs: false })
const props = defineProps<{
  class?: HTMLAttributes['class']
  readonly?: boolean
}>()
const model = defineModel<boolean>()
const t = useComponentTranslation()

const booleanOptions = computed(() => [
  { value: true, label: t('common.true', 'True') },
  { value: false, label: t('common.false', 'False') },
])
</script>

<template>
  <SelectOptions
    v-model="model"
    :class="props.class"
    :options="booleanOptions"
  />
</template>
