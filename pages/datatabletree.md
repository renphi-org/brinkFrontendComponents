<route lang="yaml">
meta:
  title: DataTableTree
</route>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Badge } from '../src/components/ui/badge'
import Button from '../src/components/ui/button/Button.vue'
import DataTableTree from '../src/components/DataTable/DataTableTree.vue'
import type { TableColumn, SortBy, GroupNode } from '../src/components/DataTable'

type Product = {
  id: number
  product: string
  category: string
  subcategory: string
  price: number
  stock: number
}

const data = ref<Product[]>([
  { id: 1, product: 'MacBook Pro', category: 'Electronics', subcategory: 'Computers', price: 2499, stock: 10 },
  { id: 2, product: 'Dell XPS', category: 'Electronics', subcategory: 'Computers', price: 1799, stock: 8 },
  { id: 3, product: 'iPhone 15', category: 'Electronics', subcategory: 'Phones', price: 999, stock: 25 },
  { id: 4, product: 'Samsung S24', category: 'Electronics', subcategory: 'Phones', price: 899, stock: 18 },
  { id: 5, product: 'AirPods Pro', category: 'Electronics', subcategory: 'Audio', price: 249, stock: 40 },
  { id: 6, product: 'Sony WH-1000XM5', category: 'Electronics', subcategory: 'Audio', price: 349, stock: 15 },
  { id: 7, product: 'Standing Desk', category: 'Furniture', subcategory: 'Desks', price: 699, stock: 5 },
  { id: 8, product: 'Corner Desk', category: 'Furniture', subcategory: 'Desks', price: 449, stock: 7 },
  { id: 9, product: 'Ergonomic Chair', category: 'Furniture', subcategory: 'Chairs', price: 599, stock: 12 },
  { id: 10, product: 'Mesh Chair', category: 'Furniture', subcategory: 'Chairs', price: 299, stock: 20 },
  { id: 11, product: 'Bookshelf', category: 'Furniture', subcategory: 'Storage', price: 199, stock: 9 },
  { id: 12, product: 'Filing Cabinet', category: 'Furniture', subcategory: 'Storage', price: 249, stock: 6 },
  { id: 13, product: 'USB-C Hub', category: 'Electronics', subcategory: 'Misc', price: 79, stock: 30 },
  { id: 14, product: 'Webcam 4K', category: 'Electronics', subcategory: 'Misc', price: 149, stock: 22 },
])

const columns: TableColumn<Product>[] = [
  { id: 'product', title: 'Product', sortable: true },
  { id: 'price', title: 'Price', sortable: true },
  { id: 'stock', title: 'Stock', sortable: true },
]

const nestedGroups = computed<GroupNode<Product>[]>(() => [
  {
    key: 'Electronics',
    items: data.value.filter(i => i.category === 'Electronics' && i.subcategory === 'Misc'),
    children: ['Computers', 'Phones', 'Audio'].map(sub => ({
      key: sub,
      items: data.value.filter(i => i.category === 'Electronics' && i.subcategory === sub),
    })),
  },
  {
    key: 'Furniture',
    children: ['Desks', 'Chairs', 'Storage'].map(sub => ({
      key: sub,
      items: data.value.filter(i => i.category === 'Furniture' && i.subcategory === sub),
    })),
  },
])

const visibleColumns = ref<string[]>(columns.map(col => col.id as string))
const sortBy = ref<SortBy>()
const selected = ref<any[]>([])
</script>

# DataTableTree Component

A tree table where every node — group or leaf — is a regular table row. The designated `treeColumn` renders the expand/collapse chevron, the selection checkbox, and depth-based indentation all inline within that single column. Leaf rows are indented one level deeper than their parent group.

<div class="not-prose">
<DataTableTree
  v-model:visible-columns="visibleColumns"
  v-model:sort-by="sortBy"
  v-model:selected="selected"
  :groups="nestedGroups"
  :columns="columns"
  tree-column="product"
  select-mode="multiselect"
  :bordered="true"
>
  <template #cell-group:product="{ group }">
    <span class="font-mono font-bold">{{ group.label || group.key }}</span>
  </template>
  <template #cell:product="{ value }">
    <span class="font-mono font-bold">{{ value }}</span>
  </template>
  <template #cell:price="{ value }">
    <span class="font-mono">${{ value }}</span>
  </template>
  <template #cell:stock="{ value }">
    <Badge :variant="value > 10 ? 'default' : 'destructive'">
      {{ value }}
    </Badge>
  </template>
  <template #cell-group:price="{ items }">
    <span class="font-mono text-muted-foreground text-xs">
      ${{ Math.min(...items.map(i => i.price)) }} – ${{ Math.max(...items.map(i => i.price)) }}
    </span>
  </template>
  <template #cell-group:stock="{ items }">
    <span class="text-muted-foreground text-xs">{{ items.reduce((s, i) => s + i.stock, 0) }} total</span>
  </template>
  <template #cell-group:actions="{ group }">
    <Button size="sm" variant="ghost" class="h-7 px-2 text-xs">
      Export {{ group.key }}
    </Button>
  </template>
  <template #cell:actions="{ item }">
    <Button size="sm" variant="ghost" class="h-7 px-2 text-xs">
      Edit
    </Button>
  </template>
</DataTableTree>
</div>

<div class="not-prose mt-6 space-y-2 text-sm font-mono bg-muted p-4 rounded-lg">
  <div><span class="text-muted-foreground">selected:</span> {{ selected }}</div>
  <div><span class="text-muted-foreground">sortBy:</span> {{ sortBy }}</div>
</div>

## How it works

Every row in the table — whether a group node or a leaf item — occupies a single `<tr>`. The column designated by `treeColumn` receives special treatment:

| Row type | `treeColumn` cell content |
| --- | --- |
| Group node | `[depth indent] [▶/▼ expand] [☐ checkbox] [group label] [count badge]` |
| Leaf item | `[depth+1 indent] [spacer] [☐ checkbox] [item value]` |

All other columns are empty for group rows, and show the item's data for leaf rows. Indentation is 20 px per level.

## Basic Usage

```vue
<script setup>
import { DataTableTree } from '@brink-components/component-library'
import type { GroupNode } from '@brink-components/component-library'
</script>

<template>
  <DataTableTree
    :groups="nestedGroups"
    :columns="columns"
    tree-column="product"
    select-mode="multiselect"
  >
    <template #cell:product="{ value }">
      <span class="font-mono">${{ value }}</span>
    </template>
    <template #cell:price="{ value }">
      <span class="font-mono">${{ value }}</span>
    </template>
  </DataTableTree>
</template>
```

## Props

Accepts all props from `DataTable` except `items`, `isGrouped`, `expandable`, `isRowExpandable`, `total`, and `pageSizeOptions`.

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| `groups` | `GroupNode<T>[]` | Yes | Ordered array of root-level group nodes |
| `treeColumn` | `string` | Yes | Column ID that renders the tree controls (expand, checkbox, indent) |
| `selectMode` | `'multiselect'` | No | Enables checkboxes inside the tree column for both group and leaf rows |

## GroupNode type

```ts
interface GroupNode<T> {
  key: string        // unique across the whole tree
  label?: string     // display name — falls back to key
  items?: T[]        // leaf rows at this level
  children?: GroupNode<T>[]
}
```
