import type { MaybeRef } from 'vue';
export interface SelectOption {
    value: any;
    label: string;
}
type __VLS_Props = {
    placeholder?: string;
    addItemButtonLabel?: string;
    multiple?: boolean;
    options: MaybeRef<SelectOption[]>;
    showAddItemButton?: boolean;
};
type __VLS_ModelProps = {
    modelValue?: any;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare var __VLS_25: {
    option: SelectOption;
};
type __VLS_Slots = {} & {
    option?: (props: typeof __VLS_25) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: any) => any;
    onAddItem: () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    onOnAddItem?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
