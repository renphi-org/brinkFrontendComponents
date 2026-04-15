import type { Component } from 'vue';
import type { FilterOption } from '.';
interface Props {
    title: string;
    sortable?: boolean;
    sortOrder?: 'asc' | 'desc' | undefined;
    hideable?: boolean;
    filter?: (() => FilterOption[] | Promise<FilterOption[]>) | Component;
    filterValue?: (string | number)[] | any;
}
declare const __VLS_export: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    sort: (order: "desc" | "asc" | undefined) => any;
    hide: () => any;
    "update:filterValue": (value: any) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    onSort?: ((order: "desc" | "asc" | undefined) => any) | undefined;
    onHide?: (() => any) | undefined;
    "onUpdate:filterValue"?: ((value: any) => any) | undefined;
}>, {
    sortable: boolean;
    hideable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
