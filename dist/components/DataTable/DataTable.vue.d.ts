import type { DataTableProps, SortBy } from '.';
declare const __VLS_export: <T extends Record<string, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<(DataTableProps<T> & {
        visibleColumns?: string[];
        itemsPerPage?: number;
        page?: number;
        sortBy?: SortBy;
        selected?: any[];
    }) & {
        "onUpdate:page"?: ((value: number | undefined) => any) | undefined;
        "onUpdate:itemsPerPage"?: ((value: number | undefined) => any) | undefined;
        "onUpdate:visibleColumns"?: ((value: string[] | undefined) => any) | undefined;
        onClickRow?: ((id: string) => any) | undefined;
        "onUpdate:sortBy"?: ((value: SortBy | undefined) => any) | undefined;
        "onUpdate:selected"?: ((value: any[]) => any) | undefined;
    }> & import("vue").PublicProps;
    expose: (exposed: import("vue").ShallowUnwrapRef<{
        selected: import("vue").ModelRef<any[], string, any[], any[]>;
        clearSelected: () => void;
    }>) => void;
    attrs: any;
    slots: { [K in keyof T as K extends string ? `cell:${K}` | "cell:actions" : never]?: ((_: {
        item: T;
        value?: T[K];
        expanded?: boolean;
    }) => any) | undefined; } & {
        bulk?: (props: {
            selected: any[];
        }) => any;
        'expanded-row'?: (props: {
            item: T;
        }) => any;
    };
    emit: ((evt: "clickRow", id: string) => void) & (((evt: "update:page", value: number | undefined) => void) & ((evt: "update:itemsPerPage", value: number | undefined) => void) & ((evt: "update:visibleColumns", value: string[] | undefined) => void) & ((evt: "update:sortBy", value: SortBy | undefined) => void) & ((evt: "update:selected", value: any[]) => void));
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T as K]: T[K];
} & {};
