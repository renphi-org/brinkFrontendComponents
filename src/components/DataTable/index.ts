import type { Ref } from 'vue'
import { useSessionStorage } from '@vueuse/core'
import { toggle as toggleRadash } from 'radash'
import { computed, ref } from 'vue'
import DataTable from './DataTable.vue'

export default DataTable

export interface DataTableProps<T> {
  items: T[]
  columns: TableColumn<T>[]
  selectMode?: 'multiselect'
  storagekey?: string
  hasActionsColumn?: boolean
  idcol?: keyof T
  total?: number
  isPending?: boolean
  sortable?: boolean
  bordered?: boolean
  expandable?: boolean
  translatableConfig?: TranslatableConfig<T>
  // For grouped data
  isGrouped?: boolean
  groups?: Record<string, T[]>
  groupByField?: string
  highlightedRow?: string
}
export interface DataTableEmits { clickRow: [id: string] }

export interface TableColumn<T> {
  title?: string
  id: keyof T
  sortable?: boolean
  groupable?: boolean
  cssClass?: string
  onClick?: (item: T) => void
  translatable?: boolean
}

export interface SortBy {
  key: string
  order: 'asc' | 'desc'
}

export interface TranslatableConfig<T> {
  fields: Array<keyof T>
  entityType: string
  getTranslations: (options: { path: { id: string } }) => Promise<any>
  updateTranslations: (options: { path: { id: string }, body: any }) => Promise<any>
}

export function useToggleState<T extends Record<string, any>>(items: Ref<T[]>, idCol: keyof T, storageKey?: string, externalState?: Ref<any[]>) {
  const state = externalState || (storageKey ? useSessionStorage(storageKey, []) : ref<any[]>([]))
  const stateMap = computed(() => Object.fromEntries(state.value.map(id => [id, true])))
  const toggle = (id: string | number) => state.value = toggleRadash(state.value, id)
  const allToggledState = computed<'indeterminate' | boolean>(() => state.value.length > 0 ? (state.value?.length === items.value.length ? true : 'indeterminate') : false)

  function clear() {
    state.value = []
  }
  function selectAll() {
    state.value = items.value.map(item => item[idCol])
  }
  const toggleAll = () => allToggledState.value === false || allToggledState.value === 'indeterminate' ? selectAll() : clear()

  return {
    state,
    stateMap,
    toggle,
    allToggledState,
    toggleAll,
    clear,
  }
}
