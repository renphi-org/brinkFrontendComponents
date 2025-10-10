import type { Ref } from 'vue';
export interface EscapeKeyObject {
    id?: string;
    callback: EscapeKeyCallback;
}
export type EscapeKeyCallback = () => boolean;
declare function remove(callbackOrKey: EscapeKeyCallback | string): EscapeKeyObject[];
export declare const escapeKey: {
    add: (callback: EscapeKeyCallback, id?: string) => number;
    remove: typeof remove;
    invokeLatest: (index?: number) => any;
};
export declare function useEscapeKey(cb: EscapeKeyCallback): void;
export declare function useEscapeKeyWhile(cb: EscapeKeyCallback, enabled: Ref<boolean>): void;
export {};
