<script setup lang="ts">
import { Settings2 } from 'lucide-vue-next'
import { computed } from 'vue'
import type { TableColumn } from '.'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface Props {
  columns: TableColumn<any>[]
  visibleColumns?: string[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:visibleColumns': [columns: string[]]
}>()

const hideableColumns = computed(() =>
  props.columns.filter(col => col.title)
)

// Get current visible columns - if undefined, all columns are visible
const currentVisibleColumns = computed(() => {
  if (!props.visibleColumns || props.visibleColumns.length === 0) {
    return props.columns.map(col => col.id as string)
  }
  return props.visibleColumns
})

function isColumnVisible(columnId: string): boolean {
  return currentVisibleColumns.value.includes(columnId)
}

function toggleColumn(columnId: string, visible: boolean | 'indeterminate') {
  const current = currentVisibleColumns.value
  const isVisible = typeof visible === 'boolean' ? visible : false

  if (isVisible) {
    // Add column if not already visible
    if (!current.includes(columnId)) {
      emit('update:visibleColumns', [...current, columnId])
    }
  } else {
    // Remove column
    emit('update:visibleColumns', current.filter(id => id !== columnId))
  }
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" size="sm" class="ml-auto h-8">
        <Settings2 class="mr-2 h-4 w-4" />
        View
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-[150px]">
      <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem
        v-for="column in hideableColumns"
        :key="column.id as string"
        :model-value="isColumnVisible(column.id as string)"
        @update:model-value="(value) => toggleColumn(column.id as string, value)"
      >
        {{ column.title }}
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
