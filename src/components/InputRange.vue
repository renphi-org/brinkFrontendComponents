<script setup lang="ts">
import { triggerRef } from 'vue'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'
import type { ValueRange } from './types'

export type { ValueRange }
interface Props {
  modelValue?: ValueRange
  class?: string
  placeholder?: [any, any]
  disabled?: boolean
}

const props = defineProps<Props>()
const modelValue = defineModel<ValueRange>()

function update(index: 0 | 1, value: number | string) {
  if (!modelValue.value) {
    modelValue.value = [undefined, undefined]
  }
  modelValue.value[index] = value as number
  triggerRef(modelValue)
}
</script>

<template>
  <div :class="cn('flex items-center gap-0', props.class)">
    <Input
      :model-value="modelValue?.[0]"
      :placeholder="placeholder?.[0] || 'Min'"
      :disabled="disabled"
      type="number"
      class="flex-1 rounded-r-none pr-1"
      @update:model-value="update(0, $event)"
    />
    <Input
      :model-value="modelValue?.[1]"
      :placeholder="placeholder?.[1] || 'Max'"
      :disabled="disabled"
      type="number"
      class="flex-1  rounded-l-none pr-1"
      @update:model-value="update(1, $event)"
    />
  </div>
</template>
