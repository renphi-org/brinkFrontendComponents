import type { Component, MaybeRef } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { useDynamicComponent } from '../DynamicComponent'
import SelectListOptions from '../SelectListOptions.vue'
import SelectOptions from '../SelectOptions.vue'
import Input from '../ui/input/Input.vue'
import DynamicAlertDialog from './DynamicAlertDialog.vue'
import DynamicComponentDialog from './DynamicComponentDialog.vue'
import DynamicConfirmComponentDialog from './DynamicConfirmComponentDialog.vue'

// GenericObject type from vee-validate
type GenericObject = Record<string, any>

export type OnOkFn<T = any> = (value?: T) => Promise<boolean> | boolean
export type OnGenericSubmitFn = (obj: GenericObject) => Promise<boolean> | boolean

export interface DynamicDialogProps<T = any> { description?: string, title: string, okButtonText?: string, cancelButtonText?: string, onOk?: OnOkFn<T> }

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

export function confirmText(dialogConfig: { description?: string, title: string } | string, initialValue: string, onOk: OnOkFn<string>, componentProps?: Partial<ComponentProps<typeof Input>>) {
  return dynamicComponent.open<typeof DynamicConfirmComponentDialog>({
    component: DynamicConfirmComponentDialog,
    componentProps: {
      componentConfig: { component: Input, componentProps: { type: 'text', ...componentProps } },
      initialValue,
      dialogConfig: { ...(typeof dialogConfig === 'string' ? { title: dialogConfig } : dialogConfig), onOk },
    },
  })
}

export function confirmNumber(dialogConfig: { description?: string, title: string } | string, initialValue: number, onOk: OnOkFn<number>, componentProps?: Partial<ComponentProps<typeof Input>>) {
  return dynamicComponent.open<typeof DynamicConfirmComponentDialog>({
    component: DynamicConfirmComponentDialog,
    componentProps: {
      componentConfig: { component: Input, componentProps: { type: 'number', ...componentProps } },
      initialValue,
      dialogConfig: { ...(typeof dialogConfig === 'string' ? { title: dialogConfig } : dialogConfig), onOk },
    },
  })
}

export function confirmBoolean(dialogConfig: { description?: string, title: string } | string, initialValue: boolean, onOk: OnOkFn<boolean>, options?: { trueLabel?: string, falseLabel?: string }, componentProps?: Partial<ComponentProps<typeof SelectOptions>>) {
  const booleanOptions = [
    { value: true, label: options?.trueLabel || 'Yes' },
    { value: false, label: options?.falseLabel || 'No' },
  ]

  return confirmSelect(
    dialogConfig,
    booleanOptions,
    initialValue,
    onOk,
    { ...componentProps, multiple: false },
  )
}
