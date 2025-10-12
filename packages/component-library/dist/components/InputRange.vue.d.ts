export type ValueRange = [number | undefined, number | undefined];
interface Props {
    modelValue?: ValueRange;
    class?: string;
    placeholder?: [any, any];
    disabled?: boolean;
}
type __VLS_Props = Props;
type __VLS_ModelProps = {
    modelValue?: ValueRange;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: ValueRange | undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: ValueRange | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
