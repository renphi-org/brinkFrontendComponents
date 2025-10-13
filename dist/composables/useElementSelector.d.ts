import type { Ref } from 'vue';
export declare function useElementSelector<T extends HTMLElement = HTMLElement>(parentRef: Ref<HTMLElement | null>, selector: string): [T | null] extends [Ref<any, any>] ? import("@vue/shared").IfAny<Ref<any, any> & T, Ref<Ref<any, any> & T, Ref<any, any> & T>, Ref<any, any> & T> : Ref<import("vue").UnwrapRef<T> | null, T | import("vue").UnwrapRef<T> | null>;
