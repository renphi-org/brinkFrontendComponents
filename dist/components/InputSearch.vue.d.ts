type __VLS_Props = Props;
interface Props {
    showClearButton?: boolean;
    placeholder?: string;
}
type __VLS_ModelProps = {
    modelValue?: string;
    'modelSubmit'?: string;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onSubmit: (value: string) => any;
    "update:modelValue": (value: string | undefined) => any;
    onClear: (value: string) => any;
    "update:modelSubmit": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onOnSubmit?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | undefined) => any) | undefined;
    onOnClear?: ((value: string) => any) | undefined;
    "onUpdate:modelSubmit"?: ((value: string) => any) | undefined;
}>, {
    placeholder: string;
    showClearButton: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
