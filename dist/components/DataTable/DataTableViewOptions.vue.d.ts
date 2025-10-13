import type { TableColumn } from '.';
interface Props {
    columns: TableColumn<any>[];
    visibleColumns?: string[];
}
declare const __VLS_export: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:visibleColumns": (columns: string[]) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:visibleColumns"?: ((columns: string[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
