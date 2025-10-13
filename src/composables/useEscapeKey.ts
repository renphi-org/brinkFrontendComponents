import type { Ref } from 'vue'
import { onMounted, onUnmounted, shallowRef, watch } from 'vue'

export interface EscapeKeyObject {
  id?: string
  callback: EscapeKeyCallback
}

export type EscapeKeyCallback = () => boolean

const escapeStack = shallowRef<EscapeKeyObject[]>([])

const add = (callback: EscapeKeyCallback, id?: string) => escapeStack.value.push({ callback, id })

function remove(callbackOrKey: EscapeKeyCallback | string) {
  return escapeStack.value
    = typeof callbackOrKey === 'string'
      ? escapeStack.value.filter(({ id }) => id !== callbackOrKey)
      : escapeStack.value.filter(({ callback }) => callback !== callbackOrKey)
}

const invokeLatest: (index?: number) => any = (index?) => {
  const actualIndex = index !== undefined ? index : escapeStack.value.length - 1
  return actualIndex >= 0 && !escapeStack.value[actualIndex].callback() && invokeLatest(actualIndex - 1)
}

document.body.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && escapeStack.value.length > 0) {
    e.stopPropagation() // prevents Drawer components from closing on ESCAPE
    if (!e.target || !['INPUT'].includes((e.target as HTMLElement)?.tagName))
      invokeLatest()
    else (e.target as HTMLElement).blur()
  }
})

export const escapeKey = { add, remove, invokeLatest }

export function useEscapeKey(cb: EscapeKeyCallback) {
  onMounted(() => add(cb))
  onUnmounted(() => remove(cb))
}

export function useEscapeKeyWhile(cb: EscapeKeyCallback, enabled: Ref<boolean>) {
  watch(enabled, (val: boolean) => val ? add(cb) : remove(cb), { immediate: true })
}
