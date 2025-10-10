import type { HTMLAttributes } from 'vue';
import { type PaginationListItemProps } from 'reka-ui';
import { type ButtonVariants } from '@/components/ui/button';
type __VLS_Props = PaginationListItemProps & {
    size?: ButtonVariants['size'];
    class?: HTMLAttributes['class'];
    isActive?: boolean;
};
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    size: "default" | "xs" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg" | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
