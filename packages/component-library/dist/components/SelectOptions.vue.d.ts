import type { Component, HTMLAttributes, MaybeRef } from 'vue';
export interface SelectOption {
    value: any;
    label: string;
}
interface Props {
    placeholder?: string;
    addItemButtonLabel?: string;
    multiple?: boolean;
    options: MaybeRef<SelectOption[]>;
    showAddItemButton?: boolean;
    showResetButton?: boolean;
    initialValues?: any;
    customValueComponent?: Component;
    label?: string;
    customValueProps?: Record<string, any>;
}
type __VLS_Props = Props & {
    class?: HTMLAttributes['class'];
};
type __VLS_PublicProps = __VLS_Props & {
    modelValue?: any;
};
declare var __VLS_12: {
    selectedOptions: any[];
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_12) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: any) => any;
    onAddItem: () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    onOnAddItem?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
