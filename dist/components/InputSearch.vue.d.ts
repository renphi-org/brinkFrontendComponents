type __VLS_Props = Props;
interface Props {
    showClearButton?: boolean;
    placeholder?: string;
}
type __VLS_ModelProps = {
    'modelSubmit'?: string;
    ''?: string;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onSubmit: (value: string) => any;
    onClear: (value: string) => any;
    "update:modelSubmit": (value: string) => any;
    "update:": (value: string | undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onOnSubmit?: ((value: string) => any) | undefined;
    onOnClear?: ((value: string) => any) | undefined;
    "onUpdate:modelSubmit"?: ((value: string) => any) | undefined;
    "onUpdate:"?: ((value: string | undefined) => any) | undefined;
}>, {
    showClearButton: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
