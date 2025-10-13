<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import SelectOptions from './SelectOptions.vue'

defineOptions({ inheritAttrs: false })
const props = defineProps<{
  class?: HTMLAttributes['class']
  readonly?: boolean
}>()
const model = defineModel<boolean>()
</script>

<template>
  <SelectOptions
    v-model="model"
    :class="props.class"
    :options="[{ value: true, label: 'True' }, { value: false, label: 'False' }]"
  />
</template>
