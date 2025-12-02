<script setup lang="ts" generic="T extends Record<string, any>">
import type { DataTableEmits, DataTableProps, SortBy } from '.'
import { ChevronDown, ChevronRight, Frown, Loader2 } from 'lucide-vue-next'
import { objectify, title } from 'radash'
import { computed, useTemplateRef, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import PaginationCustom from '@/components/PaginationCustom.vue'
import { Badge } from '@/components/ui/badge'
import Button from '@/components/ui/button/Button.vue'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import { useElementSelector } from '@/composables/useElementSelector'
import { useEscapeKeyWhile } from '@/composables/useEscapeKey'
import { useOverflowDetection } from '@/composables/useOverflowDetection'
import { useDelegatedClickEventListener, useShiftKeyRangeSelect } from '@/utils'
import { useToggleState } from '.'
import DataTableColumnHeader from './DataTableColumnHeader.vue'
import DataTableViewOptions from './DataTableViewOptions.vue'

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
  isGrouped = false,
  groups = {},
  groupByField,
  pageSizeOptions = [25, 50, 100, 250, 500],
  highlightedRow,
} = defineProps<DataTableProps<T>>()

const emit = defineEmits<DataTableEmits>()

defineSlots<
  {
    [K in keyof T as K extends string ? `cell:${K | 'actions'}` : never]?: (_: { item: T, value?: T[K], expanded?: boolean }) => any;
  } & {
    'header'?: any
    'bulk'?: (props: { selected: any[] }) => any
    'expanded-row'?: (props: { item: T }) => any
  }
>()

const { t } = useI18n()

// Pagination size options
const columnsMap = computed(() => objectify(columns, col => col.id))
const itemsMap = computed(() => objectify(items, item => item.id))

const visibleColumns = defineModel<string[]>('visibleColumns')
const itemsPerPage = defineModel<number>('itemsPerPage')
const page = defineModel<number>('page')
const sortBy = defineModel<SortBy>('sortBy')
const selected = defineModel<any[]>('selected', { default: () => [] })

const hasItems = computed(() => items && items.length > 0)

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

const containerRef = useTemplateRef('container')
const element = useElementSelector(containerRef, '[data-slot="table-container"]')
const overflow = useOverflowDetection(element as any)

// handle column clicks
useDelegatedClickEventListener(containerRef, '[data-col-id]', (el) => {
  const colId = el.getAttribute('data-col-id')
  const rowId = el.closest('tr')?.getAttribute('data-row-id')
  if (!colId || !rowId)
    return
  const column = columnsMap.value[colId]
  const item = itemsMap.value[rowId]
  if (column && item) {
    column.onClick?.(item)
  }
})

// handle row clicks
useDelegatedClickEventListener(containerRef, '[data-row-id]', (el) => {
  const rowId = el.getAttribute('data-row-id')
  if (!rowId)
    return
  emit('clickRow', rowId)
})
const itemsRef = computed(() => items)
const { stateMap: selectedMap, toggle: toggleSelected, toggleAll: toggleAllSelected, allToggledState: allSelectedState, clear } = useToggleState(itemsRef, 'id', storagekey, selected)

// range select on shift key press
useShiftKeyRangeSelect<T>(
  selected,
  computed(() => items.map(item => item.id as any)),
)

// clear selection on escape key
useEscapeKeyWhile(() => {
  clear()
  return true
}, computed(() => selected.value.length > 0))

// clear selection on page change
watch(page, () => clear())

const { stateMap: expandedMap, toggle: toggleExpand, allToggledState: allExpandedState, toggleAll: toggleExpandAll } = useToggleState(itemsRef, 'id', storagekey)

const filteredColumns = computed(() => !visibleColumns.value ? columns : columns.filter(col => visibleColumns.value?.includes(col.id as string)))

const colNum = computed(() => filteredColumns.value.length + (selectMode === 'multiselect' ? 1 : 0) + (hasActionsColumn ? 1 : 0) + (expandable ? 1 : 0))

defineExpose({ selected, clearSelected: clear })
</script>

<template>
  <div class="flex flex-col flex-1 min-w-0 min-h-0 relative">
    <!-- Toolbar with view options -->
    <div v-if="showOptions" class="flex items-center justify-end py-2">
      <slot name="header" />
      <DataTableViewOptions
        :columns="columns" :visible-columns="visibleColumns"
        @update:visible-columns="(cols) => visibleColumns = cols"
      />
    </div>

    <div
      ref="container" class="min-w-0 min-h-0 relative flex flex-col"
      :class="{ '[&_td:first-child]:!w-0 [&_th:first-child]:!w-0': selectMode === 'multiselect', '[&_td:last-child]:!w-0 [&_th:last-child]:!w-0': hasActionsColumn }"
    >
      <!-- Loading overlay -->
      <div
        v-if="isPending"
        class="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-md"
      >
        <div class="flex flex-col items-center gap-2">
          <Loader2 class="h-8 w-8 animate-spin text-muted-foreground" />
          <span class="text-sm text-muted-foreground">{{ t('dataTable.loading') || 'Loading...' }}</span>
        </div>
      </div>

      <div class="flex-1  flex flex-col min-h-0" :class="{ '!rounded-md border': bordered }">
        <table
          class="[&>tbody>tr:hover]:bg-muted h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1 [&_tbody_tr:last-child]:border-b-0 min-h-0 w-full [&_.p-datatable-empty-message]:!bg-transparent [&_.p-datatable-paginator-bottom]:sticky [&_.p-datatable-paginator-bottom]:bottom-0 [&_.p-paginator]:justify-start [&_.p-paginator]:pt-3 [&_.p-paginator]:pb-6 [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6"
        >
          <thead class="text-left ">
            <tr>
              <th v-if="expandable" class="!w-6 !pr-0">
                <Button
                  v-tooltip="'Toggle collapse'" variant="outline" size="sm" class="[&:not(:hover)]:opacity-0 "
                  @click="toggleExpandAll()"
                >
                  <component :is="allExpandedState ? ChevronDown : ChevronRight" />
                </Button>
              </th>
              <th v-if="selectMode === 'multiselect'" class="!w-6">
                <Checkbox :model-value="allSelectedState" @update:model-value="() => toggleAllSelected()" />
              </th>
              <th v-for="col in filteredColumns" :key="col.id">
                <DataTableColumnHeader
                  :title="col.title ?? title(col.id as string)"
                  :sortable="sortable && col.sortable" :sort-order="sortBy?.key === col.id ? sortBy.order : undefined"
                  :hideable="col.hideable ?? true"
                  @sort="(order) => order ? updateSort(col.id as string) : (sortBy = undefined)"
                  @hide="() => visibleColumns = visibleColumns?.filter(id => id !== col.id)"
                />
              </th>
              <th v-if="hasActionsColumn" />
            </tr>
          </thead>
          <tbody class="[&_[data-state=selected]]:bg-muted/50">
            <!-- Grouped rendering -->
            <template v-if="isGrouped">
              <template v-for="(groupItems, groupKey) in groups" :key="groupKey">
                <!-- Group header row -->
                <tr class="bg-muted/50 hover:bg-muted/70">
                  <td :colspan="colNum" class="font-medium">
                    <div class="flex items-center gap-2">
                      <span class="text-sm">{{ groupByField }}: {{ groupKey || '(No value)' }}</span>
                      <Badge variant="secondary" class="ml-2">
                        {{ groupItems.length }}
                      </Badge>
                    </div>
                  </td>
                </tr>
                <!-- Group items -->
                <template v-for="item in groupItems" :key="item.id">
                  <tr
                    :data-state="(selectedMap[item.id] || highlightedRow === item.id) && 'selected'"
                    :data-row-id="item.id"
                  >
                    <td v-if="expandable" class="!w-6 !pr-0">
                      <Button size="sm" variant="ghost" class="h-6 w-6 p-0 -mr-1" @click="toggleExpand(item[idcol])">
                        <component :is="expandedMap[item[idcol]] ? ChevronDown : ChevronRight" class="h-4 w-4" />
                      </Button>
                    </td>
                    <td v-if="selectMode === 'multiselect'" class="!w-6 !pr-0">
                      <Checkbox
                        :model-value="selected.includes(item.id)"
                        @update:model-value="toggleSelected(item.id)"
                      />
                    </td>
                    <td
                      v-for="col in filteredColumns" :key="col.id" :data-col-id="col.id"
                      :tabindex="!!col.onClick ? 0 : -1" :class="col.cssClass"
                    >
                      <slot
                        :name="`cell:${String(col.id)}`" :item :value="item[col.id]"
                        :expanded="expandedMap[item[idcol]]"
                      >
                        {{ item[col.id] }}
                      </slot>
                    </td>
                    <td v-if="hasActionsColumn">
                      <div class="flex items-center gap-0.5">
                        <slot name="cell:actions" :item>
                          <!-- Default empty actions -->
                        </slot>
                      </div>
                    </td>
                  </tr>
                  <!-- Expandable row -->
                  <tr v-if="expandable && expandedMap[item[idcol]]" class="hover:!bg-transparent">
                    <td
                      :colspan="colNum"
                      class="bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7  [&_td]:py-0.5 "
                    >
                      <slot name="expanded-row" :item>
                        <!-- Default expanded content -->
                        <div class="p-4">
                          {{ t('dataTable.expandedContent', { id: item[idcol] }) }}
                        </div>
                      </slot>
                    </td>
                  </tr>
                </template>
              </template>
            </template>

            <!-- Normal (non-grouped) rendering -->
            <template v-else>
              <template v-for="item in items" :key="item.id">
                <tr
                  :data-state="(selectedMap[item.id] || highlightedRow === item[idcol]) && 'selected'"
                  :data-row-id="item.id"
                >
                  <td v-if="expandable" class="!w-6 !pr-0">
                    <Button size="sm" variant="ghost" class="h-6 w-6 p-0 -mr-1" @click="toggleExpand(item[idcol])">
                      <component :is="expandedMap[item[idcol]] ? ChevronDown : ChevronRight" class="h-4 w-4" />
                    </Button>
                  </td>
                  <td v-if="selectMode === 'multiselect'" class="!w-6 !pr-0">
                    <Checkbox :model-value="selected.includes(item.id)" @update:model-value="toggleSelected(item.id)" />
                  </td>
                  <td
                    v-for="col in filteredColumns" :key="col.id" :data-col-id="col.id"
                    :tabindex="!!col.onClick ? 0 : -1" :class="col.cssClass"
                  >
                    <slot
                      :name="`cell:${String(col.id)}`" :item :value="item[col.id]"
                      :expanded="expandedMap[item[idcol]]"
                    >
                      {{ item[col.id] }}
                    </slot>
                  </td>
                  <td
                    v-if="hasActionsColumn" class="sticky right-0"
                    :class="{ 'bg-background/90  [[data-state=selected]_&]:bg-muted/90 ': !overflow.right }"
                  >
                    <div class="flex items-center gap-0.5">
                      <slot name="cell:actions" :item>
                        <!-- Default empty actions -->
                      </slot>
                    </div>
                  </td>
                </tr>
                <!-- Expandable row -->
                <tr v-if="expandable && expandedMap[item[idcol]]" class="hover:!bg-transparent">
                  <td
                    :colspan="colNum"
                    class="bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7  [&_td]:py-0.5 "
                  >
                    <slot name="expanded-row" :item>
                      <!-- Default expanded content -->
                      <div class="p-4">
                        {{ t('dataTable.expandedContent', { id: item[idcol] }) }}
                      </div>
                    </slot>
                  </td>
                </tr>
              </template>
            </template>

            <td v-if="!hasItems" :colspan="colNum">
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <Frown />
                  </EmptyMedia>
                  <EmptyTitle>{{ t('dataTable.noEntriesFound') }}</EmptyTitle>
                  <EmptyDescription>{{ t('dataTable.noEntriesFoundDescription') }}</EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <!-- <Button>Add data</Button> -->
                </EmptyContent>
              </Empty>
            </td>
          </tbody>
        </table>
      </div>
    </div>

    <div
      v-if="total && total > 0"
      class="@container sticky bottom-0 right-0 w-full gap-2 flex items-center bg-background px-0 py-3 z-10 transition-[left] duration-200 ease-linear"
    >
      <div v-if="selectMode === 'multiselect' && selected.length > 0">
        <div class="flex gap-2 items-center min-w-0">
          <span class="text-sm mr-2 line-clamp-1 min-w-0 text-muted-foreground">{{ t('dataTable.elementsSelected', {
            count:
              selected.length,
            total: items.length,
          }) }}
          </span>
          <!-- Bulk actions (if items selected) -->
          <template v-if="selected.length > 0">
            <slot name="bulk" :selected />
          </template>
        </div>
      </div>
      <div v-else-if="selected.length === 0 && total !== undefined">
        <span class="text-sm line-clamp-1 text-muted-foreground">{{ t('dataTable.totalElements', { total }) }}</span>
      </div>

      <!-- Pagination controls on the right -->
      <div v-if="total !== undefined" class="flex flex-1 justify-end items-center gap-4">
        <PaginationCustom
          v-model:page="page" v-model:items-per-page="itemsPerPage!" :page-size-options
          :hide-items-per-page="selected.length > 0 || pageSizeOptions.length < 2" :total="total"
          :disabled="isPending"
        />
      </div>
    </div>
  </div>
</template>
