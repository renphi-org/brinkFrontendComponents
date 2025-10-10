import type { HTMLAttributes } from 'vue';
import { type PaginationListProps } from 'reka-ui';
type __VLS_Props = PaginationListProps & {
    class?: HTMLAttributes['class'];
};
declare var __VLS_6: {
    items: ({
        type: "ellipsis";
    } | {
        type: "page";
        value: number;
    })[];
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
