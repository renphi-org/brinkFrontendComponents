import type { PaginationRootProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
type __VLS_Props = PaginationRootProps & {
    class?: HTMLAttributes['class'];
    itemsPerPage?: number | undefined;
    hideItemsPerPage?: boolean;
};
type __VLS_PublicProps = __VLS_Props & {
    'itemsPerPage'?: number | undefined;
};
declare const _default: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:page": (value: number) => any;
    "update:itemsPerPage": (value: number | undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:page"?: ((value: number) => any) | undefined;
    "onUpdate:itemsPerPage"?: ((value: number | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
