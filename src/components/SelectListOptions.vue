<script setup lang="ts" generic="T = any">
import type { MaybeRef } from 'vue'
import { Check, Plus } from 'lucide-vue-next'
import { ListboxContent, ListboxFilter, ListboxItem, ListboxItemIndicator, ListboxRoot, useFilter } from 'reka-ui'
import { computed, ref, toValue } from 'vue'

import { useI18n } from 'vue-i18n'
import { cn } from '@/lib/utils'
import Empty from './EmptyMini.vue'
import Button from './ui/button/Button.vue'

export interface SelectOption<T = any> { value: any, label: string, data?: T }
defineOptions({ inheritAttrs: false })
const { addItemButtonLabel = 'Add Item', options, placeholder = 'Filter..', disabled = false } = defineProps<{ placeholder?: string, addItemButtonLabel?: string, multiple?: boolean, options: MaybeRef<SelectOption<T>[]>, showAddItemButton?: boolean, disabled?: boolean }>()
defineEmits<{ onAddItem: [] }>()
const model = defineModel<any>()

const searchTerm = ref('')

const { startsWith } = useFilter({ sensitivity: 'base' })
const filteredOptions = computed(() => toValue(options).filter(options => startsWith(options.label, searchTerm.value)))

const hasOptions = computed(() => !!toValue(options).length)

const { t } = useI18n()
</script>

<template>
  <ListboxRoot v-model="model" :multiple :disabled="disabled">
    <ListboxFilter
      v-model="searchTerm" autofocus :disabled="!hasOptions || disabled" :placeholder="placeholder" :class="cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
      )"
    />
    <Empty v-if="!filteredOptions.length" />
    <ListboxContent class="max-h-[400px] overflow-auto py-1">
      <ListboxItem
        v-for="option in filteredOptions" :key="String(option.value)" :value="option.value" :disabled="disabled"
        class="focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-accent [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 "
      >
        <div class="flex-1">
          <slot name="option" :option>
            {{ option.label }}
          </slot>
        </div>
        <ListboxItemIndicator>
          <Check :size="12" />
        </ListboxItemIndicator>
      </ListboxItem>
    </ListboxContent>
  </ListboxRoot>
  <div class="flex gap-1 items-center">
    <div v-if="showAddItemButton" class="flex-1">
      <Button size="sm" class="sticky bottom-0" variant="ghost" type="button" :disabled="disabled" @click="$emit('onAddItem')">
        <Plus />
        {{ addItemButtonLabel }}
      </Button>
    </div>
    <div v-if="hasOptions && multiple" class="text-muted-foreground text-sm px-2">
      {{ t('common.elementCountSelected', { count: model.length }) }}
    </div>
  </div>
</template>
