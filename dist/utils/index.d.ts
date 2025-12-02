import type { Ref } from 'vue';
import type { ZodObject, ZodTypeAny } from 'zod';
type MaybeRef<T> = T | Ref<T>;
export declare function useDelegatedClickEventListener(element: MaybeRef<HTMLElement | null>, selector: string, callback: (clickedElement: HTMLElement, event: Event) => void, stopPropagation?: boolean, ignoreSelectors?: string): void;
export declare function useShiftKeyRangeSelect<T>(selectedItems: Ref<T[]>, allItems: Ref<T[]>, identity?: (item: T) => string | number | symbol): void;
export declare function simplifySchema(schema: ZodTypeAny): ZodObject<any, any>;
export {};
