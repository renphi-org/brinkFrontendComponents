import type { GroupNode } from '.';
declare const __VLS_export: <T extends Record<string, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_exposed?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: import("vue").PublicProps & __VLS_PrettifyLocal<{
        group: GroupNode<T>;
        depth: number;
        treeColumn: string;
        selectMode?: "multiselect";
        expandedMap: Record<string, boolean>;
        toggleExpand: (key: string) => void;
        getAllGroupItems: (group: GroupNode<any>) => any[];
        isGroupSelected: (items: any[]) => boolean;
        isGroupPartiallySelected: (items: any[]) => boolean;
        toggleGroupSelection: (items: any[]) => void;
    }> & (typeof globalThis extends {
        __VLS_PROPS_FALLBACK: infer P;
    } ? P : {});
    expose: (exposed: {}) => void;
    attrs: any;
    slots: Record<string, any>;
    emit: {};
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
