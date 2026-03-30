<route lang="yaml">
meta:
  title: DataTableTree
</route>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Badge } from '../src/components/ui/badge'
import DataTableTree from '../src/components/DataTable/DataTableTree.vue'
import type { TableColumn, GroupNode } from '../src/components/DataTable'

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

// Example: items at the root level, no group header
const rootItemsGroups = computed<Array<Product | GroupNode<Product>>>(() => [
  // Plain items — rendered directly at depth 0, no group header above them
  ...data.value.filter(i => i.subcategory === 'Misc'),
  // Regular groups follow
  {
    key: 'Computers',
    children: data.value.filter(i => i.subcategory === 'Computers'),
  },
  {
    key: 'Phones',
    children: data.value.filter(i => i.subcategory === 'Phones'),
  },
  {
    key: 'Furniture',
    children: (['Desks', 'Chairs', 'Storage'] as const).map(sub => ({
      key: sub,
      children: data.value.filter(i => i.category === 'Furniture' && i.subcategory === sub),
    })),
  },
])
</script>

# DataTableTree Component

## Items at the root level

Pass plain items directly in the `groups` array — they are rendered at depth 0 with no group header above them. Groups and items can be mixed freely, in any order.

<div class="not-prose">
<DataTableTree
  :items="rootItemsGroups"
  :columns="columns"
  storagekey='root-items-example'
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
</DataTableTree>
</div>

```ts
const items: Array<Product | GroupNode<Product>> = [
  // Plain items — no group header, rendered at the top
  ...miscProducts,
  // Regular groups follow
  { key: 'Computers', children: computers },
  { key: 'Phones',    children: phones },
  {
    key: 'Furniture',
    children: [
      { key: 'Desks',    children: desks },
      { key: 'Chairs',   children: chairs },
    ],
  },
]
```

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
    :items="nestedGroups"
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
| `items` | `Array<T \| GroupNode<T>>` | Yes | Ordered array of root-level nodes — plain items or group nodes |
| `treeColumn` | `string` | Yes | Column ID that renders the tree controls (expand, checkbox, indent) |
| `selectMode` | `'multiselect'` | No | Enables checkboxes inside the tree column for both group and leaf rows |

## GroupNode type

```ts
interface GroupNode<T> {
  key: string                          // unique across the whole tree
  label?: string                       // display name — falls back to key
  children?: Array<T | GroupNode<T>>   // leaf items and/or nested groups, in any order
}
```

> **Note:** `GroupNode` is identified by the presence of a `key` field. Item types must not use `key` as a field name.
