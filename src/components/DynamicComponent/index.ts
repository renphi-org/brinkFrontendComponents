import type { Component } from 'vue'
import type { ComponentEmit, ComponentProps } from 'vue-component-type-helpers'
import { objectify } from 'radash'
import { computed, ref, shallowRef, triggerRef } from 'vue'
import { escapeKey } from '@/composables/useEscapeKey'

type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export interface DynamicComponentConfig<F extends Component = any, C = ComponentProps<F>, D = ComponentEmit<F>> {
  key: string
  component: F
  componentProps?: C
  componentEmits?: D
  onClose?: () => void
}

export type CloseDynamicComponentFn = (key: string) => void

export type OpenDynamicComponentFn = <F extends Component = any, C = ComponentProps<F>, D = ComponentEmit<F>>(
  config: MakeOptional<DynamicComponentConfig<F, C, D>, 'key'>,
) => string

export type RemoveInstanceFn = (key: string) => void

export type UpdateDynamicComponentFn = <F extends Component = any, C = ComponentProps<F>, D = ComponentEmit<F>>(
  key: string,
  config: Partial<Omit<DynamicComponentConfig<F, C, D>, 'key'>>,
) => void

const instances = shallowRef<DynamicComponentConfig[]>([])
const instancesMap = computed(() => objectify(instances.value, instance => instance.key))
const visible = ref<Record<string, boolean>>({})

function removeInstance(key: string) {
  const index = instances.value.findIndex(instance => instance.key === key)
  if (index !== -1) {
    instances.value.splice(index, 1)
  }
  escapeKey.remove(key)
}

const close: CloseDynamicComponentFn = (key) => {
  visible.value[key] = false
  instancesMap.value[key]?.onClose?.()
  // remove instance after delay
  setTimeout(() => removeInstance(key), 600)
}

const open: OpenDynamicComponentFn = (config) => {
  config.key = config.key ?? `${Math.random()}`
  instances.value.push(config as DynamicComponentConfig)
  triggerRef(instances)
  visible.value[config.key] = true

  escapeKey.add(() => {
    close(config.key!)
    return true
  }, config.key)
  return config.key
}

const update: UpdateDynamicComponentFn = (key, config) => {
  const instance = instancesMap.value[key]
  if (instance) {
    Object.assign(instance, config)
    triggerRef(instances)
  }
}

export const dynamicComponent = { close, visible, open, update, instances, removeInstance }

export const useDynamicComponent = () => dynamicComponent
