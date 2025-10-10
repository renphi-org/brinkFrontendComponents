import type { HTMLAttributes } from 'vue';
import { type DropdownMenuSubContentProps } from 'reka-ui';
type __VLS_Props = DropdownMenuSubContentProps & {
    class?: HTMLAttributes['class'];
};
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    closeAutoFocus: (event: Event) => any;
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: import("reka-ui").PointerDownOutsideEvent) => any;
    entryFocus: (event: Event) => any;
    openAutoFocus: (event: Event) => any;
    focusOutside: (event: import("reka-ui").FocusOutsideEvent) => any;
    interactOutside: (event: import("reka-ui").PointerDownOutsideEvent | import("reka-ui").FocusOutsideEvent) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCloseAutoFocus?: ((event: Event) => any) | undefined;
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPointerDownOutside?: ((event: import("reka-ui").PointerDownOutsideEvent) => any) | undefined;
    onEntryFocus?: ((event: Event) => any) | undefined;
    onOpenAutoFocus?: ((event: Event) => any) | undefined;
    onFocusOutside?: ((event: import("reka-ui").FocusOutsideEvent) => any) | undefined;
    onInteractOutside?: ((event: import("reka-ui").PointerDownOutsideEvent | import("reka-ui").FocusOutsideEvent) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
