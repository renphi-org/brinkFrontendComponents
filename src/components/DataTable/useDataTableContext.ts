import type { ComputedRef, Ref } from 'vue'
import type { SortBy, TableColumn } from './index'
import { createContext } from 'reka-ui'

export interface DataTableContext<T = any> {
  // Props
  items: T[]
  columns: TableColumn<T>[]
  selectMode?: 'multiselect'
  hasActionsColumn: boolean
  idcol: keyof T
  expandable: boolean
  isRowExpandable?: (item: T) => boolean
  sortable: boolean
  bordered: boolean
  highlightedRow?: string
  isPending?: boolean

  // Computed
  filteredColumns: ComputedRef<TableColumn<T>[]>
  columnsMap: ComputedRef<Record<string, TableColumn<T>>>
  itemsMap: ComputedRef<Record<string, T>>
  colNum: ComputedRef<number>
  hasItems: ComputedRef<boolean>

  // State
  selected: Ref<any[]>
  selectedMap: ComputedRef<Record<string, boolean>>
  expandedMap: ComputedRef<Record<string, boolean>>
  sortBy?: Ref<SortBy | undefined>

  // Actions
  toggleSelected: (id: string | number) => void
  toggleAllSelected: () => void
  allSelectedState: ComputedRef<'indeterminate' | boolean>
  clearSelected: () => void
  toggleExpand: (id: string | number) => void
  toggleExpandAll: () => void
  allExpandedState: ComputedRef<'indeterminate' | boolean>
  updateSort: (key: string) => void
  isRowExpandableFn: (item: T) => boolean

  // Events
  onClickRow: (id: string) => void
  onClickColumn: (colId: string, rowId: string) => void
}

export const [injectDataTableContext, provideDataTableContext] = createContext<DataTableContext>('DataTable')
