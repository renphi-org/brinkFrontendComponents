import type { MaybeRef } from 'vue';
export interface SelectOption<T = any> {
    value: any;
    label: string;
    data?: T;
}
declare const __VLS_export: <T = any>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<({
        placeholder?: string;
        addItemButtonLabel?: string;
        multiple?: boolean;
        options: MaybeRef<SelectOption<T>[]>;
        showAddItemButton?: boolean;
    } & {
        modelValue?: any;
    }) & {
        "onUpdate:modelValue"?: ((value: any) => any) | undefined;
        onOnAddItem?: (() => any) | undefined;
    }> & import("vue").PublicProps & (typeof globalThis extends {
        __VLS_PROPS_FALLBACK: infer P;
    } ? P : {});
    expose: (exposed: {}) => void;
    attrs: any;
    slots: {
        option?: (props: {
            option: SelectOption<T>;
        }) => any;
    };
    emit: ((evt: "onAddItem") => void) & ((evt: "update:modelValue", value: any) => void);
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T as K]: T[K];
} & {};
