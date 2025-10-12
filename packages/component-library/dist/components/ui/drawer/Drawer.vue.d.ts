import type { DrawerRootProps } from "vaul-vue";
declare var __VLS_7: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_7) => any;
};
declare const __VLS_base: import("vue").DefineComponent<DrawerRootProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:open": (open: boolean) => any;
    close: () => any;
    drag: (percentageDragged: number) => any;
    animationEnd: (open: boolean) => any;
    release: (open: boolean) => any;
    "update:activeSnapPoint": (val: string | number) => any;
}, string, import("vue").PublicProps, Readonly<DrawerRootProps> & Readonly<{
    "onUpdate:open"?: ((open: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
    onDrag?: ((percentageDragged: number) => any) | undefined;
    onAnimationEnd?: ((open: boolean) => any) | undefined;
    onRelease?: ((open: boolean) => any) | undefined;
    "onUpdate:activeSnapPoint"?: ((val: string | number) => any) | undefined;
}>, {
    shouldScaleBackground: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
