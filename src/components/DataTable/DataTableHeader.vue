<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import { Checkbox } from '@/components/ui/checkbox'
import { ChevronDown, ChevronRight } from 'lucide-vue-next'
import { title } from 'radash'
import type { TableColumn } from '.'
import DataTableColumnHeader from './DataTableColumnHeader.vue'
import { injectDataTableContext } from './useDataTableContext'

defineProps<{
  visibleColumns?: string[]
}>()

const emit = defineEmits<{
  'update:visibleColumns': [cols: string[]]
}>()

defineSlots<{
  [key: `header:${string}`]: (props: { column: TableColumn<any> }) => any
}>()

const ctx = injectDataTableContext()
</script>

<template>
  <thead class="text-left">
    <tr>
      <th v-if="ctx.expandable" class="w-6! pr-0!">
        <Button
          v-tooltip="'Toggle collapse'"
          type="button"
          size="sm"
          variant="ghost"
          class="h-6 w-6 p-0 -mr-1 not-hover:opacity-0"
          @click="ctx.toggleExpandAll()"
        >
          <component :is="ctx.allExpandedState.value ? ChevronDown : ChevronRight" />
        </Button>
      </th>
      <th v-if="ctx.selectMode === 'multiselect'" class="w-6!">
        <Checkbox
          :model-value="ctx.allSelectedState.value"
          @update:model-value="() => ctx.toggleAllSelected()"
        />
      </th>
      <th v-for="col in ctx.filteredColumns.value" :key="col.id">
        <slot :name="`header:${col.id as string}`" :column="col">
          <DataTableColumnHeader
            :title="col.title ?? title(col.id as string)"
            :sortable="ctx.sortable && col.sortable"
            :sort-order="ctx.sortBy?.value?.key === col.id ? ctx.sortBy.value.order : undefined"
            :hideable="col.hideable ?? true"
            :filter="col.filter"
            :filter-value="ctx.filterBy?.value?.[col.id as string]"
            @sort="(order) => order ? ctx.updateSort(col.id as string) : (ctx.sortBy!.value = undefined)"
            @hide="() => emit('update:visibleColumns', visibleColumns?.filter(id => id !== col.id) || [])"
            @update:filter-value="(val) => ctx.updateFilter(col.id as string, val)"
          />
        </slot>
      </th>
      <th v-if="ctx.hasActionsColumn" />
    </tr>
  </thead>
</template>
