import type { InputComponents } from './interface';
export declare const INPUT_COMPONENTS: InputComponents;
/**
 * Define handlers for specific Zod types.
 * You can expand this object to support more types.
 */
export declare const DEFAULT_ZOD_HANDLERS: {
    [key: string]: keyof typeof INPUT_COMPONENTS;
};
