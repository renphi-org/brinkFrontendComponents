<script setup lang="ts" generic="T extends Record<string, any>">
import { useEscapeKeyWhile } from '@/composables/useEscapeKey'
import { useShiftKeyRangeSelect } from '@/utils'
import { useSessionStorage } from '@vueuse/core'
import { objectify } from 'radash'
import { computed, ref } from 'vue'
import type { DataTableEmits, DataTableProps, FilterBy, GroupNode, SortBy, TableColumn } from '.'
import { isGroupNode, useToggleState } from '.'
import DataTableBody from './DataTableBody.vue'
import DataTableContainer from './DataTableContainer.vue'
import DataTableEmpty from './DataTableEmpty.vue'
import DataTableGroupNode from './DataTableGroupNode.vue'
import DataTableHeader from './DataTableHeader.vue'
import DataTableLoadingOverlay from './DataTableLoadingOverlay.vue'
import DataTableToolbar from './DataTableToolbar.vue'
import { provideDataTableContext } from './useDataTableContext'

export interface DataTableTreeProps<T>
  extends Omit<
    DataTableProps<T>,
    'isGrouped' | 'items' | 'expandable' | 'isRowExpandable' | 'total' | 'pageSizeOptions'
  > {
  items: Array<T | GroupNode<T>>
  treeColumn: string
}

const {
  storagekey,
  items,
  treeColumn,
  selectMode,
  hasActionsColumn = true,
  idcol = 'id',
  columns,
  isPending,
  sortable = true,
  bordered = true,
  showOptions = true,
  highlightedRow,
} = defineProps<DataTableTreeProps<T>>()

const emit = defineEmits<DataTableEmits>()

defineSlots<
  {
    [K in keyof T as K extends string ? `cell:${K | 'actions'}` : never]?: (_: { item: T; value?: T[K] }) => any
  } & {
    [K in keyof T as K extends string ? `cell-group:${K}` : never]?: (_: { group: GroupNode<T>; items: T[] }) => void
  } & {
    [K in keyof T as K extends string ? `header:${K}` : never]?: (props: { column: TableColumn<T> }) => any
  } & {
    'cell-group:actions'?: (_: { group: GroupNode<T>; items: T[] }) => void
  } & {
    header?: any
    bulk?: (props: { selected: any[] }) => any
  }
>()

function getAllGroupItems(node: T | GroupNode<T>): T[] {
  if (!isGroupNode(node)) return [node]
  return (node.children ?? []).flatMap(getAllGroupItems)
}

function getAllGroupKeys(nodes: Array<T | GroupNode<T>>): string[] {
  return nodes.flatMap((n) => (isGroupNode(n) ? [n.key, ...getAllGroupKeys(n.children ?? [])] : []))
}

const flatItems = computed(() => items.flatMap(getAllGroupItems))

// Models
const visibleColumns = defineModel<string[]>('visibleColumns')
const sortBy = defineModel<SortBy>('sortBy')
const filterBy = defineModel<FilterBy>('filterBy')
const selected = defineModel<any[]>('selected', { default: () => [] })

// Computed
const columnsMap = computed(() => objectify(columns, (col) => col.id))
const itemsMap = computed(() => objectify(flatItems.value, (item) => item.id))
const hasItems = computed(() => flatItems.value.length > 0)
const hasNodes = computed(() => items.length > 0)
const filteredColumns = computed(() =>
  !visibleColumns.value ? columns : columns.filter((col) => visibleColumns.value?.includes(col.id as string)),
)

// No separate multiselect or expand columns — checkboxes live inside the tree column.
// colNum = data columns + actions only.
const colNum = computed(() => filteredColumns.value.length + (hasActionsColumn ? 1 : 0))

function updateFilter(key: string, value: any) {
  if (!filterBy.value) filterBy.value = {}
  if (value === undefined || (Array.isArray(value) && value.length === 0)) {
    const { [key]: _, ...rest } = filterBy.value
    filterBy.value = rest
  } else {
    filterBy.value = { ...filterBy.value, [key]: value }
  }
}

function updateSort(key: string) {
  if (!sortBy.value || sortBy.value.key !== key) {
    sortBy.value = { key, order: 'asc' }
  } else if (sortBy.value.key === key) {
    if (sortBy.value.order === 'asc') sortBy.value = { key, order: 'desc' }
    else sortBy.value = undefined
  }
}

const itemsRef = computed(() => flatItems.value)
const {
  stateMap: selectedMap,
  toggle: toggleSelected,
  toggleAll: toggleAllSelected,
  allToggledState: allSelectedState,
  clear,
} = useToggleState(itemsRef, 'id', storagekey, selected)

useShiftKeyRangeSelect<T>(
  selected,
  computed(() => flatItems.value.map((item) => item.id as any)),
)

useEscapeKeyWhile(
  () => {
    clear()
    return true
  },
  computed(() => selected.value.length > 0),
)

const expandedMap = storagekey
  ? useSessionStorage<Record<string, boolean>>(`${storagekey}-expanded`, {})
  : ref({} as Record<string, boolean>)

function toggleExpand(groupKey: string) {
  expandedMap.value[groupKey] = expandedMap.value[groupKey] === undefined ? false : !expandedMap.value[groupKey]
}

function toggleExpandAll() {
  const allKeys = getAllGroupKeys(items)
  const allExpanded = allKeys.every((key) => expandedMap.value[key] !== false)
  allKeys.forEach((key) => {
    expandedMap.value[key] = !allExpanded
  })
}

const allGroupsExpandedState = computed<'indeterminate' | boolean>(() => {
  const allKeys = getAllGroupKeys(items)
  const expandedCount = allKeys.filter((key) => expandedMap.value[key] !== false).length
  if (expandedCount === 0) return false
  if (expandedCount === allKeys.length) return true
  return 'indeterminate'
})

function isGroupSelected(groupItems: T[]) {
  return groupItems.length > 0 && groupItems.every((item) => selected.value.includes(item.id))
}

function isGroupPartiallySelected(groupItems: T[]) {
  const count = groupItems.filter((item) => selected.value.includes(item.id)).length
  return count > 0 && count < groupItems.length
}

function toggleGroupSelection(groupItems: T[]) {
  if (isGroupSelected(groupItems)) {
    selected.value = selected.value.filter((id) => !groupItems.some((item) => item.id === id))
  } else {
    selected.value = [...new Set([...selected.value, ...groupItems.map((item) => item.id)])]
  }
}

// selectMode is intentionally not passed to context — checkboxes are rendered inside
// the tree column by DataTableGroupNode, so no separate multiselect column is needed.
provideDataTableContext({
  items: flatItems.value,
  columns,
  selectMode: undefined,
  hasActionsColumn,
  idcol,
  expandable: false,
  isRowExpandable: () => false,
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
  filterBy,
  toggleSelected,
  toggleAllSelected,
  allSelectedState,
  clearSelected: clear,
  toggleExpand: () => {},
  toggleExpandAll,
  allExpandedState: allGroupsExpandedState,
  updateSort,
  updateFilter,
  isRowExpandableFn: () => false,
  onClickRow: (id: string) => emit('clickRow', id),
  onClickColumn: (colId: string, rowId: string) => {
    const column = columnsMap.value[colId]
    const item = itemsMap.value[rowId]
    if (column && item) column.onClick?.(item)
  },
})

defineExpose({ selected, clearSelected: clear })
</script>

<template>
  <div class="flex flex-col flex-1 min-w-0 min-h-0 relative">
    <DataTableToolbar
      v-if="showOptions"
      :visible-columns="visibleColumns"
      @update:visible-columns="(cols) => visibleColumns = cols"
    >
      <slot name="header" />
    </DataTableToolbar>

    <DataTableContainer>
      <DataTableLoadingOverlay v-if="isPending" />

      <div class="flex-1 flex flex-col min-h-0" :class="{ '!rounded-md border': bordered }">
        <table
          class="[&>tbody>tr:hover]:bg-zinc-100/50 dark:[&>tbody>tr:hover]:bg-zinc-900/50 h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1 min-h-0 w-full [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6"
          :class="{ '[&_tbody_tr:last-child]:border-b-0': bordered }"
        >
          <DataTableHeader
            :visible-columns="visibleColumns"
            @update:visible-columns="(cols) => visibleColumns = cols"
          >
            <template v-for="col in columns" :key="col.id" #[`header:${String(col.id)}`]="slotData">
              <slot :name="`header:${String(col.id)}`" v-bind="slotData" />
            </template>
          </DataTableHeader>

          <DataTableBody>
            <template v-if="hasNodes">
              <template v-for="node in items" :key="isGroupNode(node) ? node.key : (node as T)[idcol as string]">
                <DataTableGroupNode
                  v-if="isGroupNode(node)"
                  :group="node"
                  :depth="0"
                  :tree-column="treeColumn"
                  :select-mode="selectMode"
                  :expanded-map="expandedMap"
                  :toggle-expand="toggleExpand"
                  :get-all-group-items="getAllGroupItems"
                  :is-group-selected="isGroupSelected"
                  :is-group-partially-selected="isGroupPartiallySelected"
                  :toggle-group-selection="toggleGroupSelection"
                >
                  <template v-for="(_, name) in $slots" #[name]="slotData">
                    <slot :name="(name as any)" v-bind="slotData" />
                  </template>
                </DataTableGroupNode>
                <!-- Root-level item: synthetic group hides the header, depth -1 → item at depth 0 -->
                <DataTableGroupNode
                  v-else
                  :group="{ key: `__item__${(node as T)[idcol as string]}`, children: [node] }"
                  :depth="-1"
                  :hide-header="true"
                  :tree-column="treeColumn"
                  :select-mode="selectMode"
                  :expanded-map="expandedMap"
                  :toggle-expand="toggleExpand"
                  :get-all-group-items="getAllGroupItems"
                  :is-group-selected="isGroupSelected"
                  :is-group-partially-selected="isGroupPartiallySelected"
                  :toggle-group-selection="toggleGroupSelection"
                >
                  <template v-for="(_, name) in $slots" #[name]="slotData">
                    <slot :name="(name as any)" v-bind="slotData" />
                  </template>
                </DataTableGroupNode>
              </template>
            </template>

            <DataTableEmpty v-else />
          </DataTableBody>
        </table>
      </div>
    </DataTableContainer>
  </div>
</template>
