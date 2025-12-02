import type { Ref } from 'vue';
import { type Dependency, type EnumValues } from './interface';
export declare const injectDependencies: <T extends Ref<Dependency<Record<string, unknown>>[] | undefined, Dependency<Record<string, unknown>>[] | undefined> | null | undefined = Ref<Dependency<Record<string, unknown>>[] | undefined, Dependency<Record<string, unknown>>[] | undefined>>(fallback?: T | undefined) => T extends null ? Ref<Dependency<Record<string, unknown>>[] | undefined, Dependency<Record<string, unknown>>[] | undefined> | null : Ref<Dependency<Record<string, unknown>>[] | undefined, Dependency<Record<string, unknown>>[] | undefined>, provideDependencies: (contextValue: Ref<Dependency<Record<string, unknown>>[] | undefined, Dependency<Record<string, unknown>>[] | undefined>) => Ref<Dependency<Record<string, unknown>>[] | undefined, Dependency<Record<string, unknown>>[] | undefined>;
export default function useDependencies(fieldName: string): {
    isDisabled: Ref<boolean, boolean>;
    isHidden: Ref<boolean, boolean>;
    isRequired: Ref<boolean, boolean>;
    overrideOptions: Ref<EnumValues | undefined, EnumValues | undefined>;
};
