<script setup lang="ts">
import DataTableViewOptions from './DataTableViewOptions.vue'
import { injectDataTableContext } from './useDataTableContext'

defineProps<{
  visibleColumns?: string[]
}>()

const emit = defineEmits<{
  'update:visibleColumns': [cols: string[]]
}>()

defineSlots<{
  default?: any
}>()

const ctx = injectDataTableContext()
</script>

<template>
  <div class="flex items-center justify-end py-2">
    <slot />
    <DataTableViewOptions
      :columns="ctx.columns"
      :visible-columns="visibleColumns"
      @update:visible-columns="(cols) => emit('update:visibleColumns', cols)"
    />
  </div>
</template>
