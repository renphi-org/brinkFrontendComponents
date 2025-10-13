import type { ZodAny } from 'zod';
import type { Config, ConfigItem, Shape } from './interface';
declare const __VLS_export: <U extends ZodAny>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<{
        fieldName: string;
        shape: Shape;
        config?: ConfigItem | Config<U>;
    }> & import("vue").PublicProps;
    expose: (exposed: {}) => void;
    attrs: any;
    slots: {
        default?: (props: {}) => any;
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
