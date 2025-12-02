import type { Component } from "vue";
import type { SidebarMenuButtonProps } from "./SidebarMenuButtonChild.vue";
type __VLS_Props = SidebarMenuButtonProps & {
    tooltip?: string | Component;
};
declare var __VLS_7: {}, __VLS_27: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_7) => any;
} & {
    default?: (props: typeof __VLS_27) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    as: import("reka-ui").AsTag | Component;
    size: "default" | "sm" | "lg" | null;
    variant: "default" | "outline" | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
