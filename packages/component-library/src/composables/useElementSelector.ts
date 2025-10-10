import type { Ref } from 'vue'
import { onMounted, ref, watchEffect } from 'vue'

export function useElementSelector<T extends HTMLElement = HTMLElement>(
  parentRef: Ref<HTMLElement | null>,
  selector: string,
) {
  const elementRef = ref<T | null>(null)

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

  return elementRef
}
