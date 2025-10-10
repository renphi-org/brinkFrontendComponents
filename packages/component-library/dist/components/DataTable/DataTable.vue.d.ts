import type { DataTableProps, SortBy } from '.';
declare const _default: <T extends Record<string, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:page"?: ((value: number | undefined) => any) | undefined;
        readonly "onUpdate:itemsPerPage"?: ((value: number | undefined) => any) | undefined;
        readonly "onUpdate:visibleColumns"?: ((value: string[] | undefined) => any) | undefined;
        readonly "onUpdate:sortBy"?: ((value: SortBy | undefined) => any) | undefined;
        readonly onClickRow?: ((id: string) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, "onUpdate:page" | "onUpdate:itemsPerPage" | "onUpdate:visibleColumns" | "onUpdate:sortBy" | "onClickRow"> & (DataTableProps<T> & {
        visibleColumns?: string[];
        itemsPerPage?: number;
        page?: number;
        sortBy?: SortBy;
    }) & Partial<{}>> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{
        selected: import("vue").Ref<any[], any[]>;
        clearSelected: () => void;
    }>): void;
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
    emit: ((evt: "clickRow", id: string) => void) & (((evt: "update:page", value: number | undefined) => void) & ((evt: "update:itemsPerPage", value: number | undefined) => void) & ((evt: "update:visibleColumns", value: string[] | undefined) => void) & ((evt: "update:sortBy", value: SortBy | undefined) => void));
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
