<script setup lang="ts" generic="T extends Record<string, any>">
import type { DataTableEmits, DataTableProps, SortBy } from '.'
import { objectify } from 'radash'
import { computed, watch } from 'vue'
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

const {
  storagekey,
  items,
  selectMode,
  hasActionsColumn = true,
  idcol = 'id',
  columns,
  total,
  isPending,
  sortable = true,
  bordered = true,
  showOptions = true,
  expandable = false,
  isRowExpandable,
  pageSizeOptions = [25, 50, 100, 250, 500],
  highlightedRow,
} = defineProps<DataTableProps<T>>()

const emit = defineEmits<DataTableEmits>()

defineSlots<
  {
    [K in keyof T as K extends string ? `cell:${K | 'actions'}` : never]?: (_: { item: T, value?: T[K], expanded?: boolean }) => any
  } & {
    'header'?: any
    'bulk'?: (props: { selected: any[] }) => any
    'expanded-row'?: (props: { item: T }) => any
    'expanded-row-raw'?: (props: { item: T, colNum: number }) => any
    'cell:checkbox'?: (props: { item: T, selected: boolean | undefined }) => any
  }
>()

// Models
const visibleColumns = defineModel<string[]>('visibleColumns')
const itemsPerPage = defineModel<number>('itemsPerPage')
const page = defineModel<number>('page', { default: 1 })
const sortBy = defineModel<SortBy>('sortBy')
const selected = defineModel<any[]>('selected', { default: () => [] })

// Computed
const columnsMap = computed(() => objectify(columns, col => col.id))
const itemsMap = computed(() => objectify(items, item => item.id))
const hasItems = computed(() => items && items.length > 0)
const filteredColumns = computed(() => !visibleColumns.value ? columns : columns.filter(col => visibleColumns.value?.includes(col.id as string)))
const colNum = computed(() => filteredColumns.value.length + (selectMode === 'multiselect' ? 1 : 0) + (hasActionsColumn ? 1 : 0) + (expandable ? 1 : 0))

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

const itemsRef = computed(() => items)
const { stateMap: selectedMap, toggle: toggleSelected, toggleAll: toggleAllSelected, allToggledState: allSelectedState, clear } = useToggleState(itemsRef, 'id', storagekey, selected)

// Range select on shift key press
useShiftKeyRangeSelect<T>(
  selected,
  computed(() => items.map(item => item.id as any)),
)

// Clear selection on escape key
useEscapeKeyWhile(() => {
  clear()
  return true
}, computed(() => selected.value.length > 0))

// Clear selection on page change
// watch(page, () => clear())

const { stateMap: expandedMap, toggle: toggleExpand, allToggledState: allExpandedState, toggleAll: toggleExpandAll } = useToggleState(itemsRef, 'id', storagekey)

// Helper function to check if a row is expandable
const isRowExpandableFn = (item: T) => isRowExpandable ? isRowExpandable(item) : true

// Provide context
provideDataTableContext({
  items,
  columns,
  selectMode,
  hasActionsColumn,
  idcol,
  expandable,
  isRowExpandable,
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
  expandedMap,
  sortBy,
  toggleSelected,
  toggleAllSelected,
  allSelectedState,
  clearSelected: clear,
  toggleExpand,
  toggleExpandAll,
  allExpandedState,
  updateSort,
  isRowExpandableFn,
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
              <template v-for="item in items" :key="item.id">
                <DataTableRow :item>
                  <template v-for="(_, name) in $slots" #[name]="slotData">
                    <slot :name="(name as any)" v-bind="slotData" />
                  </template>
                </DataTableRow>

                <!-- Expandable row -->

                <!-- Expandable row -->

                <template v-if="expandable && expandedMap[item[idcol]] && isRowExpandableFn(item)">
                  <slot name="expanded-row-raw" :item :col-num="colNum">
                    <tr class="hover:!bg-transparent">
                      <td
                        :colspan="colNum"
                        class="bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7 "
                      >
                        <slot name="expanded-row" :item />
                      </td>
                    </tr>
                  </slot>
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
