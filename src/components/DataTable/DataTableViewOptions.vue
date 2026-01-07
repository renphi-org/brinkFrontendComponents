<script setup lang="ts">
import type { TableColumn } from '.'
import { Settings2 } from 'lucide-vue-next'
import { computed } from 'vue'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useComponentTranslation } from '@/composables/useComponentTranslation'

interface Props {
  columns: TableColumn<any>[]
  visibleColumns?: string[]
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:visibleColumns': [columns: string[]]
}>()

const t = useComponentTranslation()

const hideableColumns = computed(() =>
  props.columns.filter(col => col.title && col.hideable !== false),
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
  }
  else {
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
        {{ t('datatable.view', 'View') }}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-[150px]">
      <DropdownMenuLabel>{{ t('datatable.toggleColumns', 'Toggle columns') }}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem
        v-for="column in hideableColumns" :key="column.id as string"
        :model-value="isColumnVisible(column.id as string)"
        @update:model-value="(value) => toggleColumn(column.id as string, value)"
      >
        {{ column.title }}
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
