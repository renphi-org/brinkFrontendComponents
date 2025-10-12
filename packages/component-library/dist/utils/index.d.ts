import type { MaybeRef } from "@vueuse/core";
import type { Ref } from "vue";
import { ZodTypeAny, ZodObject } from "zod";
export declare function useDelegatedClickEventListener(element: MaybeRef<HTMLElement | null>, selector: string, callback: (clickedElement: HTMLElement, event: Event) => void, stopPropagation?: boolean, ignoreSelectors?: string): void;
export declare function useShiftKeyRangeSelect<T>(selectedItems: Ref<T[]>, allItems: Ref<T[]>, identity?: (item: T) => string | number | symbol): void;
export declare function simplifySchema(schema: ZodTypeAny): ZodObject<any, any>;
