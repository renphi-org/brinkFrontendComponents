<script setup lang="ts" generic="T extends Record<string, any>">
import type { DataTableEmits, DataTableProps, SortBy } from '.'
import { ChevronDown, ChevronRight } from 'lucide-vue-next'
import { objectify } from 'radash'
import { computed, ref, watch } from 'vue'
import { Badge } from '@/components/ui/badge'
import Button from '@/components/ui/button/Button.vue'
import { Checkbox } from '@/components/ui/checkbox'
import { useEscapeKeyWhile } from '@/composables/useEscapeKey'
import { useShiftKeyRangeSelect } from '@/utils'
import { useToggleState } from '.'
import DataTableBody from './DataTableBody.vue'
import DataTableContainer from './DataTableContainer.vue'
import DataTableEmpty from './DataTableEmpty.vue'
import DataTableFooter from './DataTableFooter.vue'
import DataTableHeader from './DataTableHeader.vue'
import DataTableLoadingOverlay from './DataTableLoadingOverlay.vue'
import DataTableRow from './DataTableRow.vue'
import DataTableToolbar from './DataTableToolbar.vue'
import { provideDataTableContext } from './useDataTableContext'

export interface DataTableGroupedProps<T> extends Omit<DataTableProps<T>, 'isGrouped' | 'groups' | 'expandable' | 'isRowExpandable'> {
  groups: Record<string, T[]>
}

const {
  storagekey,
  groups,
  selectMode,
  hasActionsColumn = true,
  idcol = 'id',
  columns,
  total,
  isPending,
  sortable = true,
  bordered = true,
  showOptions = true,
  pageSizeOptions = [25, 50, 100, 250, 500],
  highlightedRow,
} = defineProps<DataTableGroupedProps<T>>()

const emit = defineEmits<DataTableEmits>()

defineSlots<
  {
    [K in keyof T as K extends string ? `cell:${K | 'actions'}` : never]?: (_: { item: T, value?: T[K], expanded?: boolean }) => any
  } & {
    'header'?: any
    'bulk'?: (props: { selected: any[] }) => any
    'group-header'?: (props: { groupKey: string, items: T[], count: number, isExpanded: boolean, isSelected: boolean }) => any
  }
>()

// Flatten all items from groups
const items = computed(() => Object.values(groups).flat())

// Models
const visibleColumns = defineModel<string[]>('visibleColumns')
const itemsPerPage = defineModel<number>('itemsPerPage')
const page = defineModel<number>('page')
const sortBy = defineModel<SortBy>('sortBy')
const selected = defineModel<any[]>('selected', { default: () => [] })

// Computed
const columnsMap = computed(() => objectify(columns, col => col.id))
const itemsMap = computed(() => objectify(items.value, item => item.id))
const hasItems = computed(() => items.value && items.value.length > 0)
const filteredColumns = computed(() => !visibleColumns.value ? columns : columns.filter(col => visibleColumns.value?.includes(col.id as string)))
// Include column for group expand/collapse button
const colNum = computed(() => filteredColumns.value.length + (selectMode === 'multiselect' ? 1 : 0) + (hasActionsColumn ? 1 : 0) + 1)

// Reset page to 1 when items per page changes
watch(itemsPerPage, () => {
  if (page.value && page.value > 1) {
    page.value = 1
  }
})

function updateSort(key: string) {
  if (!sortBy.value || sortBy.value.key !== key) {
    sortBy.value = { key, order: 'asc' }
  }
  else if (sortBy.value.key === key) {
    if (sortBy.value.order === 'asc')
      sortBy.value = { key, order: 'desc' }
    else sortBy.value = undefined
  }
}

const itemsRef = computed(() => items.value)
const { stateMap: selectedMap, toggle: toggleSelected, toggleAll: toggleAllSelected, allToggledState: allSelectedState, clear } = useToggleState(itemsRef, 'id', storagekey, selected)

// Range select on shift key press
useShiftKeyRangeSelect<T>(
  selected,
  computed(() => items.value.map(item => item.id as any)),
)

// Clear selection on escape key
useEscapeKeyWhile(() => {
  clear()
  return true
}, computed(() => selected.value.length > 0))

// Clear selection on page change
watch(page, () => clear())

// Group expansion state - using a simple ref instead of useToggleState
// All groups are expanded by default (undefined is treated as true)
const expandedMap = ref({} as Record<string, boolean>)
function toggleExpand(groupKey: string) {
  // If undefined (default expanded state), set to false (collapsed)
  // Otherwise toggle the current value
  expandedMap.value[groupKey] = expandedMap.value[groupKey] === undefined ? false : !expandedMap.value[groupKey]
}

// Toggle all groups
function toggleExpandAll() {
  const groupKeys = Object.keys(groups)
  const allExpanded = groupKeys.every(key => expandedMap.value[key] !== false)

  if (allExpanded) {
    // Collapse all
    groupKeys.forEach((key) => {
      expandedMap.value[key] = false
    })
  }
  else {
    // Expand all
    groupKeys.forEach((key) => {
      expandedMap.value[key] = true
    })
  }
}

const allGroupsExpandedState = computed<'indeterminate' | boolean>(() => {
  const groupKeys = Object.keys(groups)
  const expandedCount = groupKeys.filter(key => expandedMap.value[key] !== false).length

  if (expandedCount === 0)
    return false
  if (expandedCount === groupKeys.length)
    return true
  return 'indeterminate'
})

// Group selection
function isGroupSelected(groupItems: T[]) {
  return groupItems.every(item => selected.value.includes(item.id))
}

function isGroupPartiallySelected(groupItems: T[]) {
  const selectedInGroup = groupItems.filter(item => selected.value.includes(item.id))
  return selectedInGroup.length > 0 && selectedInGroup.length < groupItems.length
}

function toggleGroupSelection(groupItems: T[]) {
  const allSelected = isGroupSelected(groupItems)
  if (allSelected) {
    // Deselect all items in group
    selected.value = selected.value.filter(id => !groupItems.some(item => item.id === id))
  }
  else {
    // Select all items in group
    const groupIds = groupItems.map(item => item.id)
    selected.value = [...new Set([...selected.value, ...groupIds])]
  }
}

// Provide context - enable expandable for the group expand column
provideDataTableContext({
  items: items.value,
  columns,
  selectMode,
  hasActionsColumn,
  idcol,
  expandable: true, // Enable for group expand column
  isRowExpandable: () => false, // But no rows are expandable
  sortable,
  bordered,
  highlightedRow,
  isPending,
  filteredColumns,
  columnsMap,
  itemsMap,
  colNum,
  hasItems,
  selected,
  selectedMap,
  expandedMap: computed(() => ({})),
  sortBy,
  toggleSelected,
  toggleAllSelected,
  allSelectedState,
  clearSelected: clear,
  toggleExpand: () => {},
  toggleExpandAll,
  allExpandedState: allGroupsExpandedState,
  updateSort,
  isRowExpandableFn: () => false,
  onClickRow: (id: string) => emit('clickRow', id),
  onClickColumn: (colId: string, rowId: string) => {
    const column = columnsMap.value[colId]
    const item = itemsMap.value[rowId]
    if (column && item) {
      column.onClick?.(item)
    }
  },
})

defineExpose({ selected, clearSelected: clear })
</script>

<template>
  <div class="flex flex-col flex-1 min-w-0 min-h-0 relative">
    <!-- Toolbar with view options -->
    <DataTableToolbar
      v-if="showOptions"
      :visible-columns="visibleColumns"
      @update:visible-columns="(cols) => visibleColumns = cols"
    >
      <slot name="header" />
    </DataTableToolbar>

    <DataTableContainer>
      <!-- Loading overlay -->
      <DataTableLoadingOverlay v-if="isPending" />

      <div class="flex-1 flex flex-col min-h-0" :class="{ '!rounded-md border': bordered }">
        <table
          class="[&>tbody>tr:hover]:bg-muted h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1  min-h-0 w-full [&_.p-datatable-empty-message]:!bg-transparent [&_.p-datatable-paginator-bottom]:sticky [&_.p-datatable-paginator-bottom]:bottom-0 [&_.p-paginator]:justify-start [&_.p-paginator]:pt-3 [&_.p-paginator]:pb-6 [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6"
          :class="{ '[&_tbody_tr:last-child]:border-b-0': bordered }"
        >
          <DataTableHeader
            :visible-columns="visibleColumns"
            @update:visible-columns="(cols) => visibleColumns = cols"
          />

          <DataTableBody>
            <template v-if="hasItems">
              <template v-for="(groupItems, groupKey) in groups" :key="groupKey">
                <!-- Group header row -->
                <tr class="bg-muted/50 hover:bg-muted/70" :data-group-id="groupKey">
                  <!-- Group expand/collapse button column -->
                  <td class="!w-6 !pr-0">
                    <Button
                      size="sm"
                      variant="ghost"
                      class="h-6 w-6 p-0"
                      @click="toggleExpand(String(groupKey))"
                    >
                      <component
                        :is="expandedMap[String(groupKey)] ? ChevronDown : ChevronRight"
                        class="h-4 w-4"
                      />
                    </Button>
                  </td>
                  <!-- Group selection checkbox column -->
                  <td v-if="selectMode === 'multiselect'" class="!w-6">
                    <Checkbox
                      :model-value="isGroupSelected(groupItems) ? true : isGroupPartiallySelected(groupItems) ? 'indeterminate' : false"
                      @update:model-value="toggleGroupSelection(groupItems)"
                    />
                  </td>
                  <!-- Group header content spanning remaining columns -->
                  <td :colspan="colNum - 1 - (selectMode === 'multiselect' ? 1 : 0)" class="font-medium">
                    <slot
                      name="group-header"
                      :group-key="String(groupKey)"
                      :items="groupItems"
                      :count="groupItems.length"
                      :is-expanded="expandedMap[String(groupKey)]"
                      :is-selected="isGroupSelected(groupItems)"
                    >
                      <div class="flex items-center gap-2">
                        <span class="text-sm">{{ groupKey || '(No value)' }}</span>
                        <Badge variant="secondary" class="ml-2">
                          {{ groupItems.length }}
                        </Badge>
                      </div>
                    </slot>
                  </td>
                </tr>

                <!-- Group items (only show if expanded) -->
                <template v-if="expandedMap[String(groupKey)] !== false">
                  <template v-for="item in groupItems" :key="item.id">
                    <DataTableRow :item>
                      <template v-for="(_, name) in $slots" #[name]="slotData">
                        <slot v-if="name !== 'group-header'" :name="(name as any)" v-bind="slotData" />
                      </template>
                    </DataTableRow>
                  </template>
                </template>
              </template>
            </template>

            <DataTableEmpty v-else />
          </DataTableBody>
        </table>
      </div>
    </DataTableContainer>

    <DataTableFooter
      v-model:page="page"
      v-model:items-per-page="itemsPerPage"
      :total
      :page-size-options="pageSizeOptions"
      :bordered
    >
      <template #bulk="slotData">
        <slot name="bulk" v-bind="slotData" />
      </template>
    </DataTableFooter>
  </div>
</template>
