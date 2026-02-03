<script setup lang="ts">
import { computed, useTemplateRef } from 'vue'
import { useDelegatedClickEventListener } from '@/utils'
import { injectDataTableContext } from './useDataTableContext'

const ctx = injectDataTableContext()
const containerRef = useTemplateRef('container')

// Handle column clicks
useDelegatedClickEventListener(containerRef, '[data-col-id]', (el) => {
  const colId = el.getAttribute('data-col-id')
  const rowId = el.closest('tr')?.getAttribute('data-row-id')
  if (colId && rowId) {
    ctx.onClickColumn(colId, rowId)
  }
})

// Handle row clicks
useDelegatedClickEventListener(containerRef, '[data-row-id]', (el) => {
  const rowId = el.getAttribute('data-row-id')
  if (rowId) {
    ctx.onClickRow(rowId)
  }
})

const containerClasses = computed(() => ({
  '[&_td:first-child]:!w-0 [&_th:first-child]:!w-0': ctx.selectMode === 'multiselect',
  '[&_td:last-child]:!w-0 [&_th:last-child]:!w-0': ctx.hasActionsColumn,
}))
</script>

<template>
  <div
    ref="container"
    class="min-w-0 min-h-0 relative flex-1 flex flex-col"
    :class="containerClasses"
  >
    <slot />
  </div>
</template>
