<script setup lang="ts">
import type { ValueRange } from './types'
import { computed, triggerRef } from 'vue'
import { useComponentTranslation } from '@/composables/useComponentTranslation'
import { cn } from '@/lib/utils'
import { Input } from './ui/input'

export type { ValueRange }
interface Props {
  modelValue?: ValueRange
  class?: string
  placeholder?: [any, any]
  disabled?: boolean
}

const props = defineProps<Props>()
const modelValue = defineModel<ValueRange>()
const t = useComponentTranslation()

const minPlaceholder = computed(() => props.placeholder?.[0] ?? t('input.range.min', 'Min'))
const maxPlaceholder = computed(() => props.placeholder?.[1] ?? t('input.range.max', 'Max'))

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
      :placeholder="minPlaceholder"
      :disabled="disabled"
      type="number"
      class="flex-1 rounded-r-none pr-1"
      @update:model-value="update(0, $event)"
    />
    <Input
      :model-value="modelValue?.[1]"
      :placeholder="maxPlaceholder"
      :disabled="disabled"
      type="number"
      class="flex-1  rounded-l-none pr-1"
      @update:model-value="update(1, $event)"
    />
  </div>
</template>
