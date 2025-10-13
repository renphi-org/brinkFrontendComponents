import type { HTMLAttributes } from 'vue';
import { type PaginationListItemProps } from 'reka-ui';
import { type ButtonVariants } from '@/components/ui/button';
type __VLS_Props = PaginationListItemProps & {
    size?: ButtonVariants['size'];
    class?: HTMLAttributes['class'];
    isActive?: boolean;
};
declare var __VLS_7: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_7) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    size: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg" | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
