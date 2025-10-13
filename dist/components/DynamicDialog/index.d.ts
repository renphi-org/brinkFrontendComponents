import type { Component, MaybeRef } from 'vue';
import type { ComponentProps } from 'vue-component-type-helpers';
import type { Config } from '../ui/auto-form';
import type { ZodObjectOrWrapped } from '../ui/auto-form/utils';
import SelectOptions from '../SelectOptions.vue';
import SelectListOptions from '../SelectListOptions.vue';
type GenericObject = Record<string, any>;
export type OnOkFn<T = any> = (value?: T) => Promise<boolean> | boolean;
export type OnGenericSubmitFn = (obj: GenericObject) => Promise<boolean> | boolean;
export interface DynamicDialogProps<T = any> {
    description?: string;
    title: string;
    okButtonText?: string;
    onOk?: OnOkFn<T>;
}
export interface DynamicComponenWithModelConfig<C extends Component> {
    component: C;
    componentProps?: ComponentProps<C>;
}
export interface DynamicComponenWithModelDialogProps<C extends Component> {
    dialogConfig: DynamicDialogProps<ComponentProps<C>['modelValue']>;
    componentConfig: DynamicComponenWithModelConfig<C>;
    type?: 'drawer' | 'dialog';
}
export declare function openDynamicDialogComponent<C extends Component>(dialogConfig: DynamicDialogProps | string, componentConfig: DynamicComponenWithModelConfig<C>, type?: 'drawer' | 'dialog'): string;
export interface GenericAutoFormConfig<T extends object = any> {
    schema: ZodObjectOrWrapped;
    onSubmit: OnGenericSubmitFn;
    initialValues?: Partial<T>;
    fieldConfig?: Config<T>;
}
export interface DynamicAutoFormDialogProps<T extends object> {
    dialogConfig: DynamicDialogProps;
    formConfig: GenericAutoFormConfig<T>;
}
export declare function openAutoFormDialog<T extends object = any>(dialogConfig: DynamicDialogProps | string, formConfig: GenericAutoFormConfig<T>): string;
export declare function alert(onOk: OnOkFn, title?: string, description?: string): string;
export declare function confirmGeneric<T extends Component>({ dialogConfig, initialValue, onOk, component, componentProps }: {
    dialogConfig: {
        description?: string;
        title: string;
    } | string;
    initialValue: ComponentProps<T>['modelValue'];
    onOk: OnOkFn<ComponentProps<T>['modelValue']>;
    component: T;
    componentProps?: Partial<ComponentProps<T>>;
}): string;
export declare function confirmSelect<T = any>(dialogConfig: {
    description?: string;
    title: string;
} | string, options: MaybeRef<{
    value: any;
    label: string;
}[]>, initialValue: T, onOk: OnOkFn<T>, componentProps?: Partial<ComponentProps<typeof SelectOptions>>): string;
export declare function confirmSelectList<T = any>(dialogConfig: {
    description?: string;
    title: string;
} | string, options: MaybeRef<{
    value: any;
    label: string;
}[]>, initialValue: T, onOk: OnOkFn<T>, componentProps?: Partial<ComponentProps<typeof SelectListOptions>>): string;
export {};
