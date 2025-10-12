import type { DynamicDialogProps } from '.';
type __VLS_Props = DynamicDialogProps;
type __VLS_ModelProps = {
    'open'?: boolean;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare var __VLS_27: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_27) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (value: boolean | undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:open"?: ((value: boolean | undefined) => any) | undefined;
}>, {
    title: string;
    onOk: import(".").OnOkFn<any>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
