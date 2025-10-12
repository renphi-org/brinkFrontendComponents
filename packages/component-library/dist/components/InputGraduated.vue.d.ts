import type { HTMLAttributes } from 'vue';
export interface ValueGraduated {
    from: number;
    value: number;
}
type __VLS_Props = {
    class?: HTMLAttributes['class'];
    placeholder?: string | ValueGraduated[];
};
type __VLS_ModelProps = {
    modelValue?: ValueGraduated[];
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: ValueGraduated[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: ValueGraduated[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
