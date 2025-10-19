// Entry point for Brink Component Library
import './index.css'

export type { AppSidebarConfig, MenuItem, MenuItemGroup } from './components/AppSidebar.types'
// Layout components
export { default as AppSidebar } from './components/AppSidebar.vue'
export { default as ButtonSelect } from './components/ButtonSelect.vue'
export { default as DataTable, useToggleState } from './components/DataTable'
export type { DataTableEmits, DataTableProps, SortBy, TableColumn, TranslatableConfig } from './components/DataTable'
export { default as DataTableColumnHeader } from './components/DataTable/DataTableColumnHeader.vue'

export { default as DataTableViewOptions } from './components/DataTable/DataTableViewOptions.vue'
// Additional components
export { default as DateFormat } from './components/DateFormat.vue'
export { default as DisplayGraduated } from './components/DisplayGraduated.vue'
// Dynamic components
export { dynamicComponent, useDynamicComponent } from './components/DynamicComponent'
export type { CloseDynamicComponentFn, DynamicComponentConfig, OpenDynamicComponentFn } from './components/DynamicComponent'
export { default as DynamicComponentProvider } from './components/DynamicComponent/DynamicComponentProvider.vue'

// Dynamic dialogs
export {
  alert,
  confirmGeneric,
  confirmSelect,
  confirmSelectList,
  openAutoFormDialog,
  openDynamicDialogComponent,
} from './components/DynamicDialog'
export type { DynamicAutoFormDialogProps, DynamicComponenWithModelConfig, DynamicComponenWithModelDialogProps, DynamicDialogProps, GenericAutoFormConfig, OnGenericSubmitFn, OnOkFn } from './components/DynamicDialog'
export { default as DynamicAlertDialog } from './components/DynamicDialog/DynamicAlertDialog.vue'
export { default as DynamicAutoFormDialog } from './components/DynamicDialog/DynamicAutoFormDialog.vue'

export { default as DynamicComponentDialog } from './components/DynamicDialog/DynamicComponentDialog.vue'

export { default as DynamicConfirmComponentDialog } from './components/DynamicDialog/DynamicConfirmComponentDialog.vue'
export { default as DynamicDialog } from './components/DynamicDialog/DynamicDialog.vue'
export { default as DynamicDrawer } from './components/DynamicDialog/DynamicDrawer.vue'

export { default as Empty } from './components/Empty.vue'
export { default as InputBoolean } from './components/InputBoolean.vue'
export { default as InputGraduated } from './components/InputGraduated.vue'
// Input components
export { default as InputRange } from './components/InputRange.vue'
export { default as InputSearch } from './components/InputSearch.vue'
export { default as SelectListOptions } from './components/SelectListOptions.vue'
export { default as SelectOptions } from './components/SelectOptions.vue'
// Component types
export type { SelectOption, ValueGraduated, ValueRange } from './components/types'

export { Button } from './components/ui/button'
export { Tag } from './Tag'
