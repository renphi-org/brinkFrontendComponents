import type { DataTableProps, FilterBy, GroupNode, SortBy, TableColumn } from '.';
export interface DataTableTreeProps<T> extends Omit<DataTableProps<T>, 'isGrouped' | 'items' | 'expandable' | 'isRowExpandable' | 'total' | 'pageSizeOptions'> {
    items: Array<T | GroupNode<T>>;
    treeColumn: string;
}
declare const __VLS_export: <T extends Record<string, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_exposed?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: import("vue").PublicProps & __VLS_PrettifyLocal<(DataTableTreeProps<T> & {
        visibleColumns?: string[];
        sortBy?: SortBy;
        filterBy?: FilterBy;
        selected?: any[];
    }) & {
        "onUpdate:visibleColumns"?: ((value: string[] | undefined) => any) | undefined;
        onClickRow?: ((id: string) => any) | undefined;
        "onUpdate:sortBy"?: ((value: SortBy | undefined) => any) | undefined;
        "onUpdate:filterBy"?: ((value: FilterBy | undefined) => any) | undefined;
        "onUpdate:selected"?: ((value: any[]) => any) | undefined;
    }> & (typeof globalThis extends {
        __VLS_PROPS_FALLBACK: infer P;
    } ? P : {});
    expose: (exposed: import("vue").ShallowUnwrapRef<{
        selected: import("vue").ModelRef<any[], string, any[], any[]>;
        clearSelected: () => void;
    }>) => void;
    attrs: any;
    slots: { [K in keyof T as K extends string ? "cell:actions" | `cell:${K}` : never]?: ((_: {
        item: T;
        value?: T[K];
    }) => any) | undefined; } & { [K_1 in keyof T as K_1 extends string ? `cell-group:${K_1}` : never]?: ((_: {
        group: GroupNode<T>;
        items: T[];
    }) => void) | undefined; } & { [K_2 in keyof T as K_2 extends string ? `header:${K_2}` : never]?: ((props: {
        column: TableColumn<T>;
    }) => any) | undefined; } & {
        'cell-group:actions'?: (_: {
            group: GroupNode<T>;
            items: T[];
        }) => void;
    } & {
        header?: any;
        bulk?: (props: {
            selected: any[];
        }) => any;
    };
    emit: ((evt: "clickRow", id: string) => void) & (((evt: "update:visibleColumns", value: string[] | undefined) => void) & ((evt: "update:sortBy", value: SortBy | undefined) => void) & ((evt: "update:filterBy", value: FilterBy | undefined) => void) & ((evt: "update:selected", value: any[]) => void));
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_PrettifyLocal<T> = (T extends any ? {
    [K in keyof T]: T[K];
} : {
    [K in keyof T as K]: T[K];
}) & {};
