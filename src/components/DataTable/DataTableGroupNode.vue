<script setup lang="ts" generic="T extends Record<string, any>">
import { Badge } from '@/components/ui/badge'
import Button from '@/components/ui/button/Button.vue'
import { Checkbox } from '@/components/ui/checkbox'
import { ChevronDown, ChevronRight } from 'lucide-vue-next'
import { computed } from 'vue'
import type { GroupNode } from '.'
import { isGroupNode } from '.'
import { injectDataTableContext } from './useDataTableContext'

// px per depth level

const props = defineProps<{
  group: GroupNode<T>
  depth: number
  hideHeader?: boolean
  treeColumn: string
  selectMode?: 'multiselect'
  expandedMap: Record<string, boolean>
  toggleExpand: (key: string) => void
  getAllGroupItems: (node: T | GroupNode<any>) => any[]
  isGroupSelected: (items: any[]) => boolean
  isGroupPartiallySelected: (items: any[]) => boolean
  toggleGroupSelection: (items: any[]) => void
}>()

defineSlots<Record<string, any>>()
const INDENT = 20

const ctx = injectDataTableContext()
const filteredColumns = ctx.filteredColumns
const selectedMap = ctx.selectedMap
const selected = ctx.selected
const columnsMap = ctx.columnsMap
const { hasActionsColumn, idcol, highlightedRow } = ctx

const allGroupItems = computed(() => props.getAllGroupItems(props.group))
const isExpanded = computed(() => props.expandedMap[props.group.key] !== false)
const isEmpty = computed(() => (props.group.children?.length ?? 0) === 0)

const groupCheckboxValue = computed(() => {
  if (allGroupItems.value.length === 0) return false
  if (props.isGroupSelected(allGroupItems.value)) return true
  if (props.isGroupPartiallySelected(allGroupItems.value)) return 'indeterminate'
  return false
})

function isItemSelected(item: T) {
  return selectedMap.value[item.id] || highlightedRow === item[idcol as keyof T]
}
</script>

<template>
  <!-- Group node row (skipped for root-item wrappers) -->
  <tr v-if="!hideHeader" :data-group-id="group.key">
    <td v-for="col in filteredColumns" :key="String(col.id)" :class="col.cssClass">
      <template v-if="String(col.id) === treeColumn">
        <div class="flex items-center gap-2" :style="{ paddingLeft: `${depth * INDENT}px` }">
          <Button
            size="sm" variant="ghost" class="h-6 w-6 p-0 shrink-0" :disabled="isEmpty"
            @click="toggleExpand(group.key)"
          >
            <component :is="isExpanded ? ChevronDown : ChevronRight" class="h-4 w-4 text-muted-foreground" />
          </Button>
          <Checkbox
            v-if="selectMode === 'multiselect'" class="shrink-0" :model-value="groupCheckboxValue"
            :disabled="allGroupItems.length === 0" @update:model-value="toggleGroupSelection(allGroupItems)"
          />
          <slot :name="`cell-group:${String(col.id)}`" :group  :items="allGroupItems" >
            <span class="text-sm font-medium">{{ (group.label ?? group.key) || '(No value)' }}</span>

            <Badge variant="secondary" class="ml-1 shrink-0">
              {{ allGroupItems.length }}
            </Badge>
          </slot>
        </div>
      </template>
      <template v-else>
        <slot :name="`cell-group:${String(col.id)}`" :group :items="allGroupItems" />
      </template>
    </td>
    <td v-if="hasActionsColumn">
      <div class="flex items-center gap-0.5">
        <slot name="cell-group:actions" :group :items="allGroupItems" />
      </div>
    </td>
  </tr>

  <template v-if="hideHeader || isExpanded">
    <template v-for="child in group.children" :key="isGroupNode(child) ? child.key : (child as T)[idcol as string]">
      <!-- Nested group -->
      <DataTableGroupNode
        v-if="isGroupNode(child)"
        :group="child" :depth="depth + 1"
        :tree-column="treeColumn" :select-mode="selectMode" :expanded-map="expandedMap" :toggle-expand="toggleExpand"
        :get-all-group-items="getAllGroupItems" :is-group-selected="isGroupSelected"
        :is-group-partially-selected="isGroupPartiallySelected" :toggle-group-selection="toggleGroupSelection"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="(name as any)" v-bind="slotData" />
        </template>
      </DataTableGroupNode>

      <!-- Leaf item — indented one level deeper than the group -->
      <tr
        v-else
        :data-row-id="(child as T)[idcol as string]"
        :data-state="isItemSelected(child as T) && 'selected'"
      >
        <td
          v-for="col in filteredColumns" :key="String(col.id)" :data-col-id="String(col.id)"
          :tabindex="!!columnsMap[String(col.id)]?.onClick ? 0 : -1" :class="col.cssClass"
        >
          <template v-if="String(col.id) === treeColumn">
            <div class="flex items-center gap-2" :style="{ paddingLeft: `${(depth + 1) * INDENT}px` }">
              <span class="w-6 h-6 shrink-0" />
              <Checkbox
                v-if="selectMode === 'multiselect'" class="shrink-0"
                :model-value="selected.includes((child as T)[idcol as string])"
                @update:model-value="ctx.toggleSelected((child as T)[idcol as string])"
              />
              <slot :name="`cell:${String(col.id)}`" :item="(child as T)" :value="(child as T)[col.id as keyof T]">
                {{ (child as T)[col.id as keyof T] }}
              </slot>
            </div>
          </template>
          <template v-else>
            <slot :name="`cell:${String(col.id)}`" :item="(child as T)" :value="(child as T)[col.id as keyof T]">
              {{ (child as T)[col.id as keyof T] }}
            </slot>
          </template>
        </td>
        <td v-if="hasActionsColumn">
          <div class="flex items-center gap-0.5">
            <slot name="cell:actions" :item="(child as T)" />
          </div>
        </td>
      </tr>
    </template>
  </template>
</template>
