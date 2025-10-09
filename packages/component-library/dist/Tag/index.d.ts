import type { VariantProps } from "class-variance-authority";
export { default as Tag } from "./Tag.vue";
export declare const tagVariants: (props?: ({
    variant?: "default" | "destructive" | "destructive-outline" | "outline" | "success" | "draft" | "released" | "archived" | "tag" | "attribute" | "attributetype" | "attributeset" | "attributesetgroup" | "choice" | "outputchannel" | "unit" | "workprocess" | "article" | "partlist" | "assembly" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type TagVariants = VariantProps<typeof tagVariants>;
