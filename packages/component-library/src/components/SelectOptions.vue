<script setup lang="ts">
import type { Component, HTMLAttributes, MaybeRef } from 'vue'
import { Plus, RotateCcw } from 'lucide-vue-next'
import { SelectTrigger } from 'reka-ui'
import { computed, toValue } from 'vue'
import { Select, SelectContent, SelectItem, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import ButtonSelect from './ButtonSelect.vue'
import Button from './ui/button/Button.vue'
import DropdownMenuSeparator from './ui/dropdown-menu/DropdownMenuSeparator.vue'

export interface SelectOption { value: any, label: string }

interface Props {
  placeholder?: string
  addItemButtonLabel?: string
  multiple?: boolean
  options: MaybeRef<SelectOption[]>
  showAddItemButton?: boolean
  showResetButton?: boolean
  initialValues?: any
  customValueComponent?: Component
  label?: string
  customValueProps?: Record<string, any>
}
defineOptions({ inheritAttrs: false })

const props = defineProps<Props & { class?: HTMLAttributes['class'] }>()

defineEmits<{ onAddItem: [] }>()

// Simple translations
const t = (key: string) => {
  const translations: Record<string, string> = {
    'common.select': 'Select...',
    'common.reset': 'Reset',
    'common.addItem': 'Add Item',
  }
  return translations[key] || key
}

const model = defineModel<any>()

const optionsAsMap = computed(() => Object.fromEntries(toValue(props.options).map(o => [o.value, o])))
const selectedOptions = computed(() => {
  if (!model.value)
    return []
  if (props.multiple) {
    return Array.isArray(model.value) ? model.value.map(v => optionsAsMap.value[v]).filter(Boolean) : []
  }
  return optionsAsMap.value[model.value] ? [optionsAsMap.value[model.value]] : []
})

function reset() {
  model.value = props.initialValues ?? (props.multiple ? [] : undefined)
}

const hasChanges = computed(() => props.initialValues === undefined ? model.value !== undefined : (JSON.stringify(props.initialValues) !== JSON.stringify(model.value)))
</script>

<template>
  <Select
    v-model="model"
    :multiple
  >
    <SelectTrigger
      :class="cn(
        'w-full data-[placeholder]:text-muted-foreground ',
        props.class)" v-bind="$attrs"
      as-child
    >
      <ButtonSelect variant="outline">
        <slot :selected-options>
          <SelectValue :placeholder="placeholder || t('common.select') " class="flex-wrap ">
            <template v-if="customValueComponent && selectedOptions.length > 0">
              <component
                :is="customValueComponent"
                v-for="option in selectedOptions"
                :key="option.value"
                :option="option"
                :selected-options="selectedOptions"
                v-bind="customValueProps"
              />
            </template>
          </SelectValue>
        </slot>
      </ButtonSelect>
    </SelectTrigger>
    <SelectContent>
      <div v-if="label" class="text-xs font-semibold px-2 py-2">
        {{ label }}
      </div>
      <SelectItem
        v-for="option in toValue(options)"
        :key="String(option.value)"
        :value="option.value"
      >
        {{ option.label }}
      </SelectItem>
      <div v-if="showResetButton && hasChanges">
        <DropdownMenuSeparator />
        <Button class="w-full" variant="ghost" size="sm" @click="reset()">
          <RotateCcw />
          {{ t('common.reset') }}
        </Button>
      </div>
    </SelectContent>
  </Select>
  <div v-if="showAddItemButton" class="-mt-2">
    <Button size="xs" class="sticky bottom-0" variant="ghost" @click="$emit('onAddItem')">
      <Plus />
      {{ t('common.addItem') }}
    </Button>
  </div>
</template>
