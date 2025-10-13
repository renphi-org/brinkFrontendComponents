import type { Ref } from 'vue';
export declare function useOverflowDetection<T extends HTMLElement = HTMLElement>(elementRef: Ref<T | null>): {
    top: boolean;
    right: boolean;
    left: boolean;
    bottom: boolean;
};
