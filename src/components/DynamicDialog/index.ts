import type { Component, MaybeRef } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import type { Config } from '../ui/auto-form'
import type { ZodObjectOrWrapped } from '../ui/auto-form/utils'
import DynamicConfirmComponentDialog from './DynamicConfirmComponentDialog.vue'
import SelectOptions from '../SelectOptions.vue'
import { useDynamicComponent } from '../DynamicComponent'
import SelectListOptions from '../SelectListOptions.vue'

// GenericObject type from vee-validate
type GenericObject = Record<string, any>
import DynamicAlertDialog from './DynamicAlertDialog.vue'
import DynamicAutoFormDialog from './DynamicAutoFormDialog.vue'
import DynamicComponentDialog from './DynamicComponentDialog.vue'

export type OnOkFn<T = any> = (value?: T) => Promise<boolean> | boolean
export type OnGenericSubmitFn = (obj: GenericObject) => Promise<boolean> | boolean

export interface DynamicDialogProps<T = any> { description?: string, title: string, okButtonText?: string, onOk?: OnOkFn<T> }

export interface DynamicComponenWithModelConfig<C extends Component> {
  component: C
  componentProps?: ComponentProps<C>
}

export interface DynamicComponenWithModelDialogProps<C extends Component> {
  dialogConfig: DynamicDialogProps<ComponentProps<C>['modelValue']>
  componentConfig: DynamicComponenWithModelConfig<C>
  type?: 'drawer' | 'dialog'
}

const dynamicComponent = useDynamicComponent()

export function openDynamicDialogComponent<C extends Component>(
  dialogConfig: DynamicDialogProps | string,
  componentConfig: DynamicComponenWithModelConfig<C>,
  type: 'drawer' | 'dialog' = 'dialog',
) {
  return dynamicComponent.open<typeof DynamicComponentDialog>({
    component: DynamicComponentDialog,
    componentProps: {
      componentConfig,
      dialogConfig: (typeof dialogConfig === 'string' ? { title: dialogConfig } : dialogConfig),
      type,
    },
  })
}

export interface GenericAutoFormConfig<T extends object = any> {
  schema: ZodObjectOrWrapped
  onSubmit: OnGenericSubmitFn
  initialValues?: Partial<T>
  fieldConfig?: Config<T>
}

export interface DynamicAutoFormDialogProps<T extends object> {
  dialogConfig: DynamicDialogProps
  formConfig: GenericAutoFormConfig<T>
}

export function openAutoFormDialog<T extends object = any>(
  dialogConfig: DynamicDialogProps | string,
  formConfig: GenericAutoFormConfig<T>,
) {
  return dynamicComponent.open<typeof DynamicAutoFormDialog>({
    component: DynamicAutoFormDialog,
    componentProps: {
      formConfig,
      dialogConfig: (typeof dialogConfig === 'string' ? { title: dialogConfig } : dialogConfig),
    },
  })
}

export function alert(onOk: OnOkFn, title: string = 'Achtung', description: string = 'Sind Sie sicher?') {
  return dynamicComponent.open<typeof DynamicAlertDialog>({
    component: DynamicAlertDialog,
    componentProps: {
      title,
      description,
      onOk,
    },
  })
}

export function confirmGeneric<T extends Component>({ dialogConfig, initialValue, onOk, component, componentProps }:
{ dialogConfig: { description?: string, title: string } | string, initialValue: ComponentProps<T>['modelValue'], onOk: OnOkFn<ComponentProps<T>['modelValue']>, component: T, componentProps?: Partial<ComponentProps<T>> }) {
  return dynamicComponent.open<typeof DynamicConfirmComponentDialog>({
    component: DynamicConfirmComponentDialog,
    componentProps: {
      componentConfig: { component, componentProps },
      initialValue,
      dialogConfig: { ...(typeof dialogConfig === 'string' ? { title: dialogConfig } : dialogConfig), onOk },
    },
  })
}

export function confirmSelect<T = any>(dialogConfig: { description?: string, title: string } | string, options: MaybeRef<{ value: any, label: string }[]>, initialValue: T, onOk: OnOkFn<T>, componentProps?: Partial<ComponentProps<typeof SelectOptions>>) {
  return dynamicComponent.open<typeof DynamicConfirmComponentDialog>({
    component: DynamicConfirmComponentDialog,
    componentProps: {
      componentConfig: { component: SelectOptions, componentProps: { multiple: true, options, ...componentProps } },
      initialValue,
      dialogConfig: { ...(typeof dialogConfig === 'string' ? { title: dialogConfig } : dialogConfig), onOk },
    },
  })
}

export function confirmSelectList<T = any>(dialogConfig: { description?: string, title: string } | string, options: MaybeRef<{ value: any, label: string }[]>, initialValue: T, onOk: OnOkFn<T>, componentProps?: Partial<ComponentProps<typeof SelectListOptions>>) {
  return dynamicComponent.open<typeof DynamicConfirmComponentDialog>({
    component: DynamicConfirmComponentDialog,
    componentProps: {
      componentConfig: { component: SelectListOptions, componentProps: { multiple: true, options, ...componentProps } },
      initialValue,
      dialogConfig: { ...(typeof dialogConfig === 'string' ? { title: dialogConfig } : dialogConfig), onOk },
    },
  })
}
