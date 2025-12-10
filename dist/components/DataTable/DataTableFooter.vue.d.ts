type __VLS_Props = {
    total?: number;
    page?: number;
    itemsPerPage?: number;
    pageSizeOptions?: number[];
    bordered?: boolean;
};
type __VLS_Slots = {
    bulk?: (_: {
        selected: any[];
    }) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:page": (page: number) => any;
    "update:itemsPerPage": (size: number) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:page"?: ((page: number) => any) | undefined;
    "onUpdate:itemsPerPage"?: ((size: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
