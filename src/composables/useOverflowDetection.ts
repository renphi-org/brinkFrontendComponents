import type { Ref } from 'vue'
import { useResizeObserver, useScroll } from '@vueuse/core'
import { reactive, toValue, watch } from 'vue'

export function useOverflowDetection<T extends HTMLElement = HTMLElement>(elementRef: Ref<T | null>) {
  const { arrivedState, x, y } = useScroll(elementRef)

  const state = reactive({
    top: false,
    right: false,
    left: false,
    bottom: false,
  })

  const checkOverflow = () => {
    const element = toValue(elementRef)
    if (!element)
      return
    const overflowX = element.scrollWidth > element.clientWidth
    const overflowY = element.scrollHeight > element.clientHeight
    state.left = !overflowX || arrivedState.left
    state.right = !overflowX || arrivedState.right
    state.top = !overflowY || arrivedState.top
    state.bottom = !overflowY || arrivedState.bottom
  }

  watch(x, () => checkOverflow())
  watch(y, () => checkOverflow())
  watch(elementRef, () => checkOverflow())
  useResizeObserver(elementRef, () => checkOverflow())

  return state
}
