import type { MaybeRef } from '@vueuse/core'
import type { Ref } from 'vue'
import { useEventListener, useKeyModifier } from '@vueuse/core'
import { diff, unique } from 'radash'
import { watch } from 'vue'

export function useDelegatedClickEventListener(element: MaybeRef<HTMLElement | null>, selector: string, callback: (clickedElement: HTMLElement, event: Event) => void, stopPropagation: boolean = false, ignoreSelectors?: string) {
  useEventListener(element, 'keydown', (e: KeyboardEvent) => {
    if (['Space', 'Enter'].includes(e.code) && document.activeElement?.matches(selector)) {
      e.preventDefault()
      callback(document.activeElement as HTMLElement, e)
    }
  })
  useEventListener(element, 'click', (e) => {
    if (ignoreSelectors && (e.target as HTMLElement)?.matches(ignoreSelectors)) {
      return false
    }
    const target: HTMLElement | null = (e.target as HTMLElement).closest(selector)
    if (target) {
      if (stopPropagation) {
        e.stopPropagation()
        e.stopImmediatePropagation()
      }
      e.preventDefault()
      callback(target!, e)
    }
  })
}

function toggleAllInbetween<T>(
  selected: T[],
  all: T[],
  startId: T,
  endId: T,
  identity?: (item: T) => string | number | symbol,
) {
  const isStartValueSelected = selected.includes(startId)
  const startIndex = all.indexOf(startId)
  const endIndex = all.indexOf(endId)
  const range = startIndex < endIndex ? all.slice(startIndex, endIndex + 1) : all.slice(endIndex, startIndex)
  return !isStartValueSelected
    ? selected.filter(id => !range.includes(id))
    : unique([...selected, ...range], identity)
}

export function useShiftKeyRangeSelect<T>(selectedItems: Ref<T[]>, allItems: Ref<T[]>, identity?: (item: T) => string | number | symbol) {
  let recentItem: null | any = null
  const shiftPressed = useKeyModifier('Shift')
  watch(
    () => selectedItems.value,
    (values: any[], valuesBefore: any[]) => {
      const newItems
        = values.length > valuesBefore.length
          ? diff(values, valuesBefore, identity)
          : diff(valuesBefore, values, identity)
      if (newItems.length === 1) {
        const newItem = newItems[0]
        if (shiftPressed.value && recentItem) {
          selectedItems.value = toggleAllInbetween(selectedItems.value, allItems.value, recentItem, newItem, identity)
        }
        recentItem = newItem
      }
    },
  )
}
