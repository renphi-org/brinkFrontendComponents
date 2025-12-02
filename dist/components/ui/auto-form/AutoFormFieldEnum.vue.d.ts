import type { FieldProps } from './interface';
type __VLS_Props = FieldProps & {
    options?: string[];
};
declare var __VLS_25: {
    field: import("vee-validate").FieldBindingObject<any>;
    componentField: import("vee-validate").ComponentFieldBindingObject<any>;
    value: any;
    meta: import("vee-validate").FieldMeta<any>;
    errors: string[];
    errorMessage: string | undefined;
    handleInput: import("vee-validate").FieldContext["handleChange"];
    resetField: (state?: Partial<import("vee-validate").FieldState<unknown>> | undefined) => void;
    handleReset: () => void;
    validate: import("vee-validate").FieldValidator<unknown>;
    handleChange: (e: Event | unknown, shouldValidate?: boolean) => void;
    handleBlur: (e?: Event, shouldValidate?: boolean) => void;
    setTouched: (isTouched: boolean) => void;
    setErrors: (message: string | string[]) => void;
    setValue: (value: unknown, shouldValidate?: boolean) => void;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_25) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
