import type { Component } from 'vue';
import type { ComponentEmit, ComponentProps } from 'vue-component-type-helpers';
type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export interface DynamicComponentConfig<F extends Component = any, C = ComponentProps<F>, D = ComponentEmit<F>> {
    key: string;
    component: F;
    componentProps?: C;
    componentEmits?: D;
    onClose?: () => void;
}
export type CloseDynamicComponentFn = (key: string) => void;
export type OpenDynamicComponentFn = <F extends Component = any, C = ComponentProps<F>, D = ComponentEmit<F>>(config: MakeOptional<DynamicComponentConfig<F, C, D>, 'key'>) => string;
export type RemoveInstanceFn = (key: string) => void;
export type UpdateDynamicComponentFn = <F extends Component = any, C = ComponentProps<F>, D = ComponentEmit<F>>(key: string, config: Partial<Omit<DynamicComponentConfig<F, C, D>, 'key'>>) => void;
declare function removeInstance(key: string): void;
export declare const dynamicComponent: {
    close: CloseDynamicComponentFn;
    visible: import("vue").Ref<Record<string, boolean>, Record<string, boolean>>;
    open: OpenDynamicComponentFn;
    update: UpdateDynamicComponentFn;
    instances: import("vue").ShallowRef<DynamicComponentConfig<any, unknown, {}>[], DynamicComponentConfig<any, unknown, {}>[]>;
    removeInstance: typeof removeInstance;
};
export declare const useDynamicComponent: () => {
    close: CloseDynamicComponentFn;
    visible: import("vue").Ref<Record<string, boolean>, Record<string, boolean>>;
    open: OpenDynamicComponentFn;
    update: UpdateDynamicComponentFn;
    instances: import("vue").ShallowRef<DynamicComponentConfig<any, unknown, {}>[], DynamicComponentConfig<any, unknown, {}>[]>;
    removeInstance: typeof removeInstance;
};
export {};
