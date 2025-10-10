# DataTable

A powerful and flexible data table component with sorting, pagination, selection, and more.

<script setup>
import { ref } from 'vue'
import { DataTable, Tag, Button } from '@brink-components/component-library'

// Basic Table
const items = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User' },
])

const columns = ref([
  { id: 'name', title: 'Name', sortable: true },
  { id: 'email', title: 'Email', sortable: true },
  { id: 'role', title: 'Role', sortable: true },
])

const page = ref(1)
const itemsPerPage = ref(25)
const sortBy = ref({ key: 'name', order: 'asc' })

// With Selection
const items2 = ref([
  { id: 1, name: 'Product A', price: 29.99, stock: 100 },
  { id: 2, name: 'Product B', price: 49.99, stock: 50 },
  { id: 3, name: 'Product C', price: 19.99, stock: 200 },
  { id: 4, name: 'Product D', price: 99.99, stock: 25 },
])

const columns2 = ref([
  { id: 'name', title: 'Product Name', sortable: true },
  { id: 'price', title: 'Price', sortable: true },
  { id: 'stock', title: 'Stock', sortable: true },
])

const page2 = ref(1)
const itemsPerPage2 = ref(25)

// With Custom Cell Slots
const items3 = ref([
  { id: 1, name: 'Task A', status: 'completed', priority: 'high' },
  { id: 2, name: 'Task B', status: 'pending', priority: 'medium' },
  { id: 3, name: 'Task C', status: 'in-progress', priority: 'low' },
])

const columns3 = ref([
  { id: 'name', title: 'Task Name' },
  { id: 'status', title: 'Status' },
  { id: 'priority', title: 'Priority' },
])

const page3 = ref(1)
const itemsPerPage3 = ref(25)

const getStatusVariant = (status) => {
  if (status === 'completed') return 'success'
  if (status === 'in-progress') return 'draft'
  return 'outline'
}

const getPriorityVariant = (priority) => {
  if (priority === 'high') return 'destructive'
  if (priority === 'medium') return 'draft'
  return 'outline'
}

// With Actions Column
const items4 = ref([
  { id: 1, name: 'User 1', email: 'user1@example.com' },
  { id: 2, name: 'User 2', email: 'user2@example.com' },
  { id: 3, name: 'User 3', email: 'user3@example.com' },
])

const columns4 = ref([
  { id: 'name', title: 'Name' },
  { id: 'email', title: 'Email' },
])

const page4 = ref(1)
const itemsPerPage4 = ref(25)

const handleEdit = (item) => {
  alert(`Edit ${item.name}`)
}

const handleDelete = (item) => {
  alert(`Delete ${item.name}`)
}
</script>

## Installation

```bash
npm install @brink-components/component-library
```

## Import

```vue
<script setup>
import { DataTable } from '@brink-components/component-library'
</script>
```

## Examples

### Basic Table

<div class='vp-raw'>
  <DataTable
    :items="items"
    :columns="columns"
    :total="items.length"
    v-model:page="page"
    v-model:items-per-page="itemsPerPage"
    v-model:sort-by="sortBy"
    :has-actions-column="false"
  />
</div>

```vue
<script setup>
import { ref } from 'vue'
import { DataTable } from '@brink-components/component-library'

const items = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
])

const columns = ref([
  { id: 'name', title: 'Name', sortable: true },
  { id: 'email', title: 'Email', sortable: true },
  { id: 'role', title: 'Role', sortable: true },
])

const page = ref(1)
const itemsPerPage = ref(25)
const sortBy = ref({ key: 'name', order: 'asc' })
</script>

<template>
  <DataTable
    :items="items"
    :columns="columns"
    :total="items.length"
    v-model:page="page"
    v-model:items-per-page="itemsPerPage"
    v-model:sort-by="sortBy"
    :has-actions-column="false"
  />
</template>
```

### With Selection


  <DataTable
    :items="items2"
    :columns="columns2"
    :total="items2.length"
    v-model:page="page2"
    v-model:items-per-page="itemsPerPage2"
    select-mode="multiselect"
    :has-actions-column="false"
  />


```vue
<template>
  <DataTable
    :items="items"
    :columns="columns"
    :total="items.length"
    v-model:page="page"
    v-model:items-per-page="itemsPerPage"
    select-mode="multiselect"
    :has-actions-column="false"
  />
</template>
```

### With Custom Cell Slots


  <DataTable
    :items="items3"
    :columns="columns3"
    :total="items3.length"
    v-model:page="page3"
    v-model:items-per-page="itemsPerPage3"
    :has-actions-column="false"
  >
    <template #cell:status="{ value }">
      <Tag :variant="getStatusVariant(value)">{{ value }}</Tag>
    </template>
    <template #cell:priority="{ value }">
      <Tag :variant="getPriorityVariant(value)">{{ value }}</Tag>
    </template>
  </DataTable>


```vue
<template>
  <DataTable
    :items="items"
    :columns="columns"
    :total="items.length"
  >
    <template #cell:status="{ value }">
      <Tag :variant="getStatusVariant(value)">{{ value }}</Tag>
    </template>
    <template #cell:priority="{ value }">
      <Tag :variant="getPriorityVariant(value)">{{ value }}</Tag>
    </template>
  </DataTable>
</template>
```

### With Actions Column


  <DataTable
    :items="items4"
    :columns="columns4"
    :total="items4.length"
    v-model:page="page4"
    v-model:items-per-page="itemsPerPage4"
  >
    <template #cell:actions="{ item }">
      <div class="flex gap-2">
        <Button size="sm" variant="ghost" @click="handleEdit(item)">Edit</Button>
        <Button size="sm" variant="ghost" @click="handleDelete(item)">Delete</Button>
      </div>
    </template>
  </DataTable>


```vue
<template>
  <DataTable
    :items="items"
    :columns="columns"
    :total="items.length"
  >
    <template #cell:actions="{ item }">
      <div class="flex gap-2">
        <Button size="sm" @click="handleEdit(item)">Edit</Button>
        <Button size="sm" variant="destructive" @click="handleDelete(item)">Delete</Button>
      </div>
    </template>
  </DataTable>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `T[]` | **required** | Array of items to display |
| `columns` | `TableColumn<T>[]` | **required** | Column configuration |
| `total` | `number` | - | Total number of items (for pagination) |
| `selectMode` | `'multiselect'` | - | Enable row selection |
| `storagekey` | `string` | - | Key for persisting expanded state |
| `hasActionsColumn` | `boolean` | `true` | Show actions column |
| `idcol` | `keyof T` | `'id'` | Property to use as unique identifier |
| `isPending` | `boolean` | `false` | Show loading state |
| `sortable` | `boolean` | `true` | Enable sorting |
| `bordered` | `boolean` | `true` | Show border around table |
| `expandable` | `boolean` | `false` | Enable row expansion |
| `isGrouped` | `boolean` | `false` | Display items in groups |
| `groups` | `Record<string, T[]>` | `{}` | Grouped items |
| `groupByField` | `string` | - | Field name for grouping label |
| `highlightedRow` | `string` | - | ID of row to highlight |

### Column Configuration

```typescript
interface TableColumn<T> {
  title?: string          // Column header text
  id: keyof T            // Property name from item
  sortable?: boolean     // Enable sorting for this column
  groupable?: boolean    // Enable grouping by this column
  cssClass?: string      // Custom CSS class
  onClick?: (item: T) => void  // Click handler for cells
  translatable?: boolean // Mark column as translatable (legacy)
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `clickRow` | `id: string` | Emitted when a row is clicked |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `cell:{columnId}` | `{ item: T, value: any, expanded: boolean }` | Custom cell content |
| `cell:actions` | `{ item: T }` | Custom actions column content |
| `bulk` | `{ selected: any[] }` | Bulk actions for selected items |
| `expanded-row` | `{ item: T }` | Content for expanded row |

## Models

| Model | Type | Description |
|-------|------|-------------|
| `v-model:page` | `number` | Current page number |
| `v-model:itemsPerPage` | `number` | Items per page |
| `v-model:sortBy` | `SortBy` | Sort configuration |
| `v-model:visibleColumns` | `string[]` | Visible column IDs |

## Features

- ✅ **Sorting** - Click column headers to sort
- ✅ **Pagination** - Built-in pagination controls
- ✅ **Selection** - Multi-select with shift-click range selection
- ✅ **Expandable Rows** - Show additional details
- ✅ **Custom Cell Rendering** - Use slots for custom content
- ✅ **Grouped Data** - Display items in collapsible groups
- ✅ **Loading State** - Built-in loading overlay
- ✅ **Keyboard Navigation** - Accessible keyboard controls
- ✅ **Responsive** - Adapts to container size

## Accessibility

- Semantic HTML table structure
- Keyboard navigation support
- Focus management
- ARIA attributes
- Screen reader friendly
- Escape key to clear selection
