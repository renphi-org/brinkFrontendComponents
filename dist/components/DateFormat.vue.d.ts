interface Props {
    /**
     * The date to format - can be a Date object, timestamp, or date string
     */
    date: Date | string | number;
    /**
     * The format string to use for formatting
     * @default 'DD.MM.YYYY HH:mm'
     */
    format?: string;
    /**
     * Whether to show relative time (e.g., "2 hours ago") instead of formatted date
     * @default false
     */
    relative?: boolean;
    /**
     * Locale for formatting
     * @default 'de-DE'
     */
    locale?: string;
}
declare const __VLS_export: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{}>, {
    format: string;
    locale: string;
    relative: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
