import type { PaginationRootProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
type __VLS_Props = PaginationRootProps & {
    class?: HTMLAttributes['class'];
    itemsPerPage?: number | undefined;
    hideItemsPerPage?: boolean;
    pageSizeOptions: number[];
};
type __VLS_ModelProps = {
    'itemsPerPage'?: number | undefined;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:page": (value: number) => any;
    "update:itemsPerPage": (value: number | undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:page"?: ((value: number) => any) | undefined;
    "onUpdate:itemsPerPage"?: ((value: number | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
