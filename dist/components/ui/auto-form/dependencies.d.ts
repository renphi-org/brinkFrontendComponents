import type { Ref } from 'vue';
import { type Dependency, type EnumValues } from './interface';
export declare const injectDependencies: <T extends Ref<Dependency<{
    [x: string]: any;
}>[] | undefined, Dependency<{
    [x: string]: any;
}>[] | undefined> | null | undefined = Ref<Dependency<{
    [x: string]: any;
}>[] | undefined, Dependency<{
    [x: string]: any;
}>[] | undefined>>(fallback?: T | undefined) => T extends null ? Ref<Dependency<{
    [x: string]: any;
}>[] | undefined, Dependency<{
    [x: string]: any;
}>[] | undefined> | null : Ref<Dependency<{
    [x: string]: any;
}>[] | undefined, Dependency<{
    [x: string]: any;
}>[] | undefined>, provideDependencies: (contextValue: Ref<Dependency<{
    [x: string]: any;
}>[] | undefined, Dependency<{
    [x: string]: any;
}>[] | undefined>) => Ref<Dependency<{
    [x: string]: any;
}>[] | undefined, Dependency<{
    [x: string]: any;
}>[] | undefined>;
export default function useDependencies(fieldName: string): {
    isDisabled: Ref<boolean, boolean>;
    isHidden: Ref<boolean, boolean>;
    isRequired: Ref<boolean, boolean>;
    overrideOptions: Ref<EnumValues | undefined, EnumValues | undefined>;
};
