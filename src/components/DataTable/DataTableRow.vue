<script setup lang="ts" generic="T extends Record<string, any>">
import { ChevronDown, ChevronRight } from 'lucide-vue-next'
import { computed } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import { Checkbox } from '@/components/ui/checkbox'
import { injectDataTableContext } from './useDataTableContext'

const props = defineProps<{
  item: T
}>()

defineSlots<
  {
    [K in keyof T as K extends string ? `cell:${K | 'actions'}` : never]?: (_: { item: T, value?: T[K], expanded?: boolean }) => any
  }
>()

const ctx = injectDataTableContext()

const isSelected = computed(() => ctx.selectedMap.value[props.item.id])
const isHighlighted = computed(() => ctx.highlightedRow === props.item[ctx.idcol as keyof T])
const isExpanded = computed(() => ctx.expandedMap.value[props.item[ctx.idcol as keyof T]])
const isExpandable = computed(() => ctx.isRowExpandableFn(props.item))
</script>

<template>
  <tr
    :data-state="(isSelected || isHighlighted) && 'selected'"
    :data-row-id="item.id"
  >
    <td v-if="ctx.expandable" class="!w-6 !pr-0">
      <Button
        v-if="isExpandable"
        size="sm"
        variant="ghost"
        class="h-6 w-6 p-0 -mr-1"
        @click="ctx.toggleExpand(item[ctx.idcol as keyof T])"
      >
        <component :is="isExpanded ? ChevronDown : ChevronRight" class="h-4 w-4" />
      </Button>
    </td>
    <td v-if="ctx.selectMode === 'multiselect'" class="!w-6 !pr-0">
      <Checkbox
        :model-value="ctx.selected.value.includes(item.id)"
        @update:model-value="ctx.toggleSelected(item.id)"
      />
    </td>
    <td
      v-for="col in ctx.filteredColumns.value"
      :key="col.id"
      :data-col-id="col.id"
      :tabindex="!!col.onClick ? 0 : -1"
      :class="col.cssClass"
    >
      <slot
        :name="`cell:${String(col.id)}`"
        :item
        :value="item[col.id as keyof T]"
        :expanded="isExpanded"
      >
        {{ item[col.id as keyof T] }}
      </slot>
    </td>
    <td v-if="ctx.hasActionsColumn">
      <div class="flex items-center gap-0.5">
        <slot name="cell:actions" :item>
          <!-- Default empty actions -->
        </slot>
      </div>
    </td>
  </tr>
</template>
