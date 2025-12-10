<route lang="yaml">
meta:
  title: DataTableGrouped
</route>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Badge } from '../src/components/ui/badge'
import DataTableGrouped from '../src/components/DataTable/DataTableGrouped.vue'
import type { TableColumn, SortBy } from '../src/components/DataTable'

// Grouped data example
type GroupedData = {
  id: number
  product: string
  category: string
  price: number
  stock: number
}

const groupedData = ref<GroupedData[]>([
  { id: 1, product: 'Laptop', category: 'Electronics', price: 1200, stock: 15 },
  { id: 2, product: 'Mouse', category: 'Electronics', price: 25, stock: 50 },
  { id: 3, product: 'Keyboard', category: 'Electronics', price: 75, stock: 30 },
  { id: 4, product: 'Desk', category: 'Furniture', price: 350, stock: 8 },
  { id: 5, product: 'Chair', category: 'Furniture', price: 200, stock: 12 },
  { id: 6, product: 'Monitor', category: 'Electronics', price: 400, stock: 20 },
  { id: 7, product: 'Bookshelf', category: 'Furniture', price: 150, stock: 5 },
  { id: 8, product: 'Lamp', category: 'Furniture', price: 45, stock: 25 },
])

const groupedColumns: TableColumn<GroupedData>[] = [
  { id: 'id', title: 'ID', sortable: true },
  { id: 'product', title: 'Product', sortable: true },
  { id: 'category', title: 'Category', sortable: true },
  { id: 'price', title: 'Price', sortable: true },
  { id: 'stock', title: 'Stock', sortable: true },
]

// Group data by category
const groupedByCategory = computed(() => {
  const groups: Record<string, GroupedData[]> = {}
  groupedData.value.forEach(item => {
    if (!groups[item.category]) {
      groups[item.category] = []
    }
    groups[item.category].push(item)
  })
  return groups
})

// State variables
const visibleColumns = ref<string[]>(groupedColumns.map(col => col.id as string))
const itemsPerPage = ref(25)
const page = ref(1)
const sortBy = ref<SortBy>()
const selected = ref<any[]>([])
</script>

# DataTableGrouped Component

Advanced grouped data table with expandable groups, group-level selection, and customizable group headers.

<div class="not-prose">
<DataTableGrouped
  v-model:visible-columns="visibleColumns"
  v-model:items-per-page="itemsPerPage"
  v-model:page="page"
  v-model:sort-by="sortBy"
  v-model:selected="selected"
  :groups="groupedByCategory"
  :columns="groupedColumns"
  :total="groupedData.length"
  group-by-field="category"
  select-mode="multiselect"
  :bordered="true"
>
  <template #group-header="{ groupKey }">
    <span class="font-bold">{{groupKey}}</span>
  </template>
  <template #cell:price="{ value }">
    <span class="font-mono">${{ value }}</span>
  </template>
  <template #cell:stock="{ value }">
    <Badge ca:variant="value > 10 ? 'default' : 'destructive'">
      {{ value }}
    </Badge>
  </template>
</DataTableGrouped>
</div>

<div class="not-prose mt-6 space-y-3">
  <div class="text-sm font-semibold">DataTableGrouped State:</div>
  <div class="space-y-2 text-sm font-mono bg-muted p-4 rounded-lg">
    <div><span class="text-muted-foreground">visibleColumns:</span> <span class="text-foreground">{{ visibleColumns }}</span></div>
    <div><span class="text-muted-foreground">itemsPerPage:</span> <span class="text-foreground">{{ itemsPerPage }}</span></div>
    <div><span class="text-muted-foreground">page:</span> <span class="text-foreground">{{ page }}</span></div>
    <div><span class="text-muted-foreground">sortBy:</span> <span class="text-foreground">{{ sortBy }}</span></div>
    <div><span class="text-muted-foreground">selected:</span> <span class="text-foreground">{{ selected }}</span></div>
  </div>
</div>

## Key Features

- **Expandable Groups** - Click the chevron icon to expand/collapse groups
- **Group Selection** - Select all items in a group with the group checkbox
- **Partial Selection** - Group checkbox shows indeterminate state when some items are selected
- **Custom Group Headers** - Use the `group-header` slot to customize group display
- **All DataTable Features** - Supports sorting, filtering, pagination, and all other DataTable props

## Basic Usage

```vue
<script setup>
import { DataTableGrouped } from '@brink-components/component-library'
import { computed, ref } from 'vue'

const groupedData = ref([
  { id: 1, product: 'Laptop', category: 'Electronics', price: 1200, stock: 15 },
  { id: 2, product: 'Mouse', category: 'Electronics', price: 25, stock: 50 },
  { id: 3, product: 'Desk', category: 'Furniture', price: 350, stock: 8 },
  { id: 4, product: 'Chair', category: 'Furniture', price: 200, stock: 12 },
])

const columns = [
  { id: 'id', title: 'ID', sortable: true },
  { id: 'product', title: 'Product', sortable: true },
  { id: 'category', title: 'Category', sortable: true },
  { id: 'price', title: 'Price', sortable: true },
  { id: 'stock', title: 'Stock', sortable: true },
]

// Group data by category
const groupedByCategory = computed(() => {
  const groups = {}
  groupedData.value.forEach((item) => {
    if (!groups[item.category]) {
      groups[item.category] = []
    }
    groups[item.category].push(item)
  })
  return groups
})
</script>

<template>
  <DataTableGrouped
    :groups="groupedByCategory"
    :columns="columns"
    :total="groupedData.length"
    group-by-field="category"
    select-mode="multiselect"
  >
    <template #cell:price="{ value }">
      <span class="font-mono">${{ value }}</span>
    </template>
  </DataTableGrouped>
</template>
```

## Custom Group Header

You can customize the group header using the `group-header` slot:

```vue
<template>
  <DataTableGrouped
    :groups="groupedByCategory"
    :columns="columns"
    :total="groupedData.length"
    group-by-field="category"
    select-mode="multiselect"
  >
    <template #group-header="{ groupKey, count, isExpanded, isSelected }">
      <div class="flex items-center gap-3">
        <Button
          size="sm"
          variant="ghost"
          class="h-6 w-6 p-0"
          @click="/* toggle handled automatically */"
        >
          <ChevronDown v-if="isExpanded" class="h-4 w-4" />
          <ChevronRight v-else class="h-4 w-4" />
        </Button>
        <Checkbox
          :model-value="isSelected"
          @update:model-value="/* selection handled automatically */"
        />
        <div class="flex items-center gap-2">
          <span class="text-lg font-bold">{{ groupKey }}</span>
          <Badge variant="secondary">
            {{ count }} items
          </Badge>
        </div>
      </div>
    </template>

    <template #cell:price="{ value }">
      <span class="font-mono">${{ value }}</span>
    </template>
  </DataTableGrouped>
</template>
```

## Props

The `DataTableGrouped` component accepts all props from `DataTable` except:

- `items` (replaced by `groups`)
- `isGrouped` (always true)

**Additional Props:**

| Prop           | Type                  | Required | Description                                                                 |
| -------------- | --------------------- | -------- | --------------------------------------------------------------------------- |
| `groups`       | `Record<string, T[]>` | Yes      | Object where keys are group names and values are arrays of items            |
| `groupByField` | `string`              | Yes      | The name of the field used for grouping (displayed in default group header) |

## Slots

All slots from `DataTable` are available, plus:

**`group-header`** - Customize the group header row

Props passed to slot:

- `groupKey: string` - The group identifier
- `items: T[]` - All items in this group
- `count: number` - Number of items in the group
- `isExpanded: boolean` - Whether the group is currently expanded
- `isSelected: boolean` - Whether all items in the group are selected

## Selection Behavior

- **Group Checkbox**: Clicking the group checkbox selects/deselects all items in that group
- **Indeterminate State**: Group checkbox shows indeterminate state when some (but not all) items are selected
- **Individual Selection**: You can still select individual rows within groups
- **All Selection**: The header "Select All" checkbox works across all groups

## Expandable Groups with Expandable Rows

You can combine group expansion with row expansion:

```vue
<template>
  <DataTableGrouped
    :groups="groupedByCategory"
    :columns="columns"
    :total="groupedData.length"
    group-by-field="category"
    :expandable="true"
  >
    <template #expanded-row="{ item }">
      <div class="p-4 space-y-2">
        <h4 class="font-semibold">
          Details for {{ item.product }}
        </h4>
        <p class="text-sm text-muted-foreground">
          Additional information about {{ item.product }} goes here.
        </p>
      </div>
    </template>
  </DataTableGrouped>
</template>
```
