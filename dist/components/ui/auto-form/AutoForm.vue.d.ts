import type { FormContext, GenericObject } from 'vee-validate';
import type { z } from 'zod';
import type { Config, ConfigItem, Dependency, Shape } from './interface';
import { type ZodObjectOrWrapped } from './utils';
declare const __VLS_export: <T extends ZodObjectOrWrapped>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<{
        schema: T;
        form?: FormContext<GenericObject>;
        fieldConfig?: Config<z.infer<T>>;
        dependencies?: Dependency<z.infer<T>>[];
    } & {
        onSubmit?: ((event: z.core.output<T>) => any) | undefined;
    }> & import("vue").PublicProps & (typeof globalThis extends {
        __VLS_PROPS_FALLBACK: infer P;
    } ? P : {});
    expose: (exposed: {}) => void;
    attrs: any;
    slots: { [K in NonNullable<keyof z.core.output<T>>]?: ((props: {
        shape: { [key in keyof T]: Shape; }[keyof T];
        fieldName: string;
        config: ConfigItem;
    }) => any) | undefined; } & {
        customAutoForm?: (props: {
            fields: { [key in keyof z.core.output<T>]: {
                shape: Shape;
                fieldName: string;
                config: ConfigItem;
            }; };
        }) => any;
    } & {
        default?: (props: {
            shapes: { [key in keyof T]: Shape; };
        }) => any;
    };
    emit: (evt: "submit", event: z.core.output<T>) => void;
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T as K]: T[K];
} & {};
