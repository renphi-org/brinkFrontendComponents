import type { SidebarProps } from ".";
declare var __VLS_1: {}, __VLS_29: {}, __VLS_31: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_29) => any;
} & {
    default?: (props: typeof __VLS_31) => any;
};
declare const __VLS_base: import("vue").DefineComponent<SidebarProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SidebarProps> & Readonly<{}>, {
    variant: "sidebar" | "floating" | "inset";
    side: "left" | "right";
    collapsible: "offcanvas" | "icon" | "none";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
