import type { MaybeRef } from 'vue';
export interface SelectOption {
    value: any;
    label: string;
}
type __VLS_Props = {
    addItemButtonLabel?: string;
    multiple?: boolean;
    options: MaybeRef<SelectOption[]>;
    showAddItemButton?: boolean;
};
type __VLS_ModelProps = {
    modelValue?: any;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: any) => any;
    onAddItem: () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    onOnAddItem?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
