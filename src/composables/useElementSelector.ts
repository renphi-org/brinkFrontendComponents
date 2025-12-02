import type { Ref, ShallowRef } from 'vue'
import { onMounted, shallowRef, watchEffect } from 'vue'

export function useElementSelector<T extends HTMLElement = HTMLElement>(
  parentRef: Ref<HTMLElement | null>,
  selector: string,
) {
  const elementRef = shallowRef<T | null>(null)

  const updateElements = () => {
    if (parentRef.value) {
      elementRef.value = parentRef.value.querySelector<T>(selector)
    }
    else {
      elementRef.value = null
    }
  }

  onMounted(updateElements)

  watchEffect(() => {
    updateElements()
  })

  return elementRef as ShallowRef<T | null>
}
