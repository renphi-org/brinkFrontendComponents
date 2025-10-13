import type { VariantProps } from "class-variance-authority";
export { default as Button } from "./Button.vue";
export declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "link" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type ButtonVariants = VariantProps<typeof buttonVariants>;
