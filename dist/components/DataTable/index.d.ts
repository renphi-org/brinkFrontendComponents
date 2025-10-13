import type { Ref } from 'vue';
import DataTable from './DataTable.vue';
export default DataTable;
export interface DataTableProps<T> {
    items: T[];
    columns: TableColumn<T>[];
    selectMode?: 'multiselect';
    storagekey?: string;
    hasActionsColumn?: boolean;
    idcol?: keyof T;
    total?: number;
    isPending?: boolean;
    sortable?: boolean;
    bordered?: boolean;
    expandable?: boolean;
    translatableConfig?: TranslatableConfig<T>;
    isGrouped?: boolean;
    groups?: Record<string, T[]>;
    groupByField?: string;
    highlightedRow?: string;
}
export interface DataTableEmits {
    clickRow: [id: string];
}
export interface TableColumn<T> {
    title?: string;
    id: keyof T;
    sortable?: boolean;
    groupable?: boolean;
    cssClass?: string;
    onClick?: (item: T) => void;
    translatable?: boolean;
}
export interface SortBy {
    key: string;
    order: 'asc' | 'desc';
}
export interface TranslatableConfig<T> {
    fields: Array<keyof T>;
    entityType: string;
    getTranslations: (options: {
        path: {
            id: string;
        };
    }) => Promise<any>;
    updateTranslations: (options: {
        path: {
            id: string;
        };
        body: any;
    }) => Promise<any>;
}
export declare function useToggleState<T extends Record<string, any>>(items: Ref<T[]>, idCol: keyof T, storageKey?: string, externalState?: Ref<any[]>): {
    state: Ref<any[], any[]>;
    stateMap: import("vue").ComputedRef<any>;
    toggle: (id: string | number) => any[];
    allToggledState: import("vue").ComputedRef<boolean | "indeterminate">;
    toggleAll: () => void;
    clear: () => void;
};
