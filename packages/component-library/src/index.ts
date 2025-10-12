// Entry point for Brink Component Library
import "./index.css";

export { Tag } from "./Tag";
export { Button } from "./components/ui/button";
export { default as DataTable, useToggleState } from "./components/DataTable";
export type { DataTableProps, DataTableEmits, TableColumn, SortBy, TranslatableConfig } from "./components/DataTable";

// Additional components
export { default as DateFormat } from "./components/DateFormat.vue";
export { default as SelectOptions } from "./components/SelectOptions.vue";
export { default as InputSearch } from "./components/InputSearch.vue";
export { default as SelectListOptions } from "./components/SelectListOptions.vue";
export { default as Empty } from "./components/Empty.vue";
export { default as ButtonSelect } from "./components/ButtonSelect.vue";

// Input components
export { default as InputRange } from "./components/InputRange.vue";
export { default as InputGraduated } from "./components/InputGraduated.vue";
export { default as InputBoolean } from "./components/InputBoolean.vue";
export { default as DisplayGraduated } from "./components/DisplayGraduated.vue";

// Component types
export type { SelectOption, ValueRange, ValueGraduated } from "./components/types";

// Dynamic components
export { useDynamicComponent, dynamicComponent } from "./components/DynamicComponent";
export { default as DynamicComponentProvider } from "./components/DynamicComponent/DynamicComponentProvider.vue";
export type { DynamicComponentConfig, OpenDynamicComponentFn, CloseDynamicComponentFn } from "./components/DynamicComponent";

// Dynamic dialogs
export {
  openDynamicDialogComponent,
  openAutoFormDialog,
  alert,
  confirmGeneric,
  confirmSelect,
  confirmSelectList,
} from "./components/DynamicDialog";
export { default as DynamicAlertDialog } from "./components/DynamicDialog/DynamicAlertDialog.vue";
export { default as DynamicAutoFormDialog } from "./components/DynamicDialog/DynamicAutoFormDialog.vue";
export { default as DynamicComponentDialog } from "./components/DynamicDialog/DynamicComponentDialog.vue";
export { default as DynamicConfirmComponentDialog } from "./components/DynamicDialog/DynamicConfirmComponentDialog.vue";
export { default as DynamicDialog } from "./components/DynamicDialog/DynamicDialog.vue";
export { default as DynamicDrawer } from "./components/DynamicDialog/DynamicDrawer.vue";
export type { DynamicDialogProps, DynamicComponenWithModelConfig, DynamicComponenWithModelDialogProps, GenericAutoFormConfig, DynamicAutoFormDialogProps, OnOkFn, OnGenericSubmitFn } from "./components/DynamicDialog";

// Layout components
export { default as AppSidebar } from "./components/AppSidebar.vue";
export type { AppSidebarConfig, MenuItem, MenuItemGroup } from "./components/AppSidebar.types";
