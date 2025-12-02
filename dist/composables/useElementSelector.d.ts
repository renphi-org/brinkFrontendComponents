import type { Ref, ShallowRef } from 'vue';
export declare function useElementSelector<T extends HTMLElement = HTMLElement>(parentRef: Ref<HTMLElement | null>, selector: string): ShallowRef<T | null>;
