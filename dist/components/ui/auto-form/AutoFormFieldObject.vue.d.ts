import type { ZodObject, ZodRawShape } from 'zod';
import type { Config } from './interface';
declare const __VLS_export: <T extends ZodRawShape>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<{
        fieldName: string;
        required?: boolean;
        config?: Config<T>;
        schema?: ZodObject<T>;
        disabled?: boolean;
    }> & import("vue").PublicProps;
    expose: (exposed: {}) => void;
    attrs: any;
    slots: {
        default?: (props: import("vue").DefineProps<import("@vue/shared").LooseRequired<{
            fieldName: string;
            required?: boolean;
            config?: Config<T>;
            schema?: ZodObject<T>;
            disabled?: boolean;
        }>, "disabled" | "required" | ([Config<T> | undefined] extends [boolean | undefined] ? "config" : never)>) => any;
    };
    emit: {};
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T as K]: T[K];
} & {};
