<script setup lang="ts" generic="T extends Record<string, any>">
import { Badge } from '@/components/ui/badge'
import Button from '@/components/ui/button/Button.vue'
import { Checkbox } from '@/components/ui/checkbox'
import { ChevronDown, ChevronRight } from 'lucide-vue-next'
import { computed } from 'vue'
import type { GroupNode } from '.'
import { injectDataTableContext } from './useDataTableContext'

// px per depth level

const props = defineProps<{
  group: GroupNode<T>
  depth: number
  treeColumn: string
  selectMode?: 'multiselect'
  expandedMap: Record<string, boolean>
  toggleExpand: (key: string) => void
  getAllGroupItems: (group: GroupNode<any>) => any[]
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
const hasChildren = computed(() => (props.group.children?.length ?? 0) > 0)
const hasItems = computed(() => (props.group.items?.length ?? 0) > 0)
const isEmpty = computed(() => !hasChildren.value && !hasItems.value)

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
  <!-- Group node row -->
  <tr :data-group-id="group.key">
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

  <template v-if="isExpanded">
    <!-- Recursive child groups -->
    <DataTableGroupNode
      v-for="child in group.children" :key="child.key" :group="child" :depth="depth + 1"
      :tree-column="treeColumn" :select-mode="selectMode" :expanded-map="expandedMap" :toggle-expand="toggleExpand"
      :get-all-group-items="getAllGroupItems" :is-group-selected="isGroupSelected"
      :is-group-partially-selected="isGroupPartiallySelected" :toggle-group-selection="toggleGroupSelection"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="(name as any)" v-bind="slotData" />
      </template>
    </DataTableGroupNode>

    <!-- Direct items at this level — indented one level deeper than the group -->
    <tr
      v-for="item in group.items" :key="item.id" :data-row-id="item.id"
      :data-state="isItemSelected(item) && 'selected'"
    >
      <td
        v-for="col in filteredColumns" :key="String(col.id)" :data-col-id="String(col.id)"
        :tabindex="!!columnsMap[String(col.id)]?.onClick ? 0 : -1" :class="col.cssClass"
      >
        <template v-if="String(col.id) === treeColumn">
          <div class="flex items-center gap-2" :style="{ paddingLeft: `${(depth + 1) * INDENT}px` }">
            <!-- Spacer matching the expand button width so text aligns with group label -->
            <span class="w-6 h-6 shrink-0" />
            <Checkbox
              v-if="selectMode === 'multiselect'" class="shrink-0" :model-value="selected.includes(item.id)"
              @update:model-value="ctx.toggleSelected(item.id)"
            />
            <slot :name="`cell:${String(col.id)}`" :item :value="item[col.id as keyof T]">
              {{ item[col.id as keyof T] }}
            </slot>
          </div>
        </template>
        <template v-else>
          <slot :name="`cell:${String(col.id)}`" :item :value="item[col.id as keyof T]">
            {{ item[col.id as keyof T] }}
          </slot>
        </template>
      </td>
      <td v-if="hasActionsColumn">
        <div class="flex items-center gap-0.5">
          <slot name="cell:actions" :item />
        </div>
      </td>
    </tr>
  </template>
</template>
