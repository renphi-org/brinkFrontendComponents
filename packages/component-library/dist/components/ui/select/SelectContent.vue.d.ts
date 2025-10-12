import type { HTMLAttributes } from 'vue';
import { type SelectContentProps } from 'reka-ui';
type __VLS_Props = SelectContentProps & {
    class?: HTMLAttributes['class'];
};
declare var __VLS_22: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_22) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    closeAutoFocus: (event: Event) => any;
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: import("reka-ui").PointerDownOutsideEvent) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCloseAutoFocus?: ((event: Event) => any) | undefined;
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPointerDownOutside?: ((event: import("reka-ui").PointerDownOutsideEvent) => any) | undefined;
}>, {
    position: "item-aligned" | "popper";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
