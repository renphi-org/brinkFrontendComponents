<route lang="yaml">
meta:
  title: DataTable
</route>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Badge } from '../src/components/ui/badge'
import DataTable, { type TableColumn, type SortBy } from '../src/components/DataTable'

// Sample data for DataTable
type TableData = {
  id: number
  name: string
  email: string
  role: string
  status: string
}

const tableData = ref<TableData[]>([
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active'},
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Editor', status: 'Active' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Active' },
  { id: 6, name: 'Diana Prince', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  { id: 7, name: 'Ethan Hunt', email: 'ethan@example.com', role: 'User', status: 'Inactive' },
])

const tableColumns: TableColumn<TableData>[] = [
  { id: 'id', title: 'ID', sortable: true,  hideable: false},
  { id: 'name', title: 'Name', sortable: true },
  { id: 'email', title: 'Email', sortable: true },
  { id: 'role', title: 'Role', sortable: true },
  { id: 'status', title: 'Status', sortable: true },
]

// State variables
const visibleColumns = ref<string[]>(tableColumns.map(col => col.id))
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref<SortBy[]>([])
const selected = ref<any[]>([])

// Expandable rows example data
type ExpandableData = {
  id: number
  project: string
  client: string
  budget: number
  status: string
  description?: string
  tasks?: string[]
}

const expandableData = ref<ExpandableData[]>([
  {
    id: 1,
    project: 'Website Redesign',
    client: 'Acme Corp',
    budget: 50000,
    status: 'In Progress',
    description: 'Complete redesign of the company website with modern UI/UX',
    tasks: ['Design mockups', 'Frontend development', 'Backend integration', 'Testing']
  },
  {
    id: 2,
    project: 'Mobile App',
    client: 'Tech Solutions',
    budget: 75000,
    status: 'Planning',
    description: 'Native mobile app for iOS and Android platforms',
    tasks: ['Requirements gathering', 'Architecture design', 'Prototype development']
  },
  {
    id: 3,
    project: 'API Integration',
    client: 'Data Systems Inc',
    budget: 30000,
    status: 'Completed',
    description: 'REST API integration with third-party services',
    tasks: ['API documentation review', 'Implementation', 'Testing', 'Deployment']
  },
])

const expandableColumns: TableColumn<ExpandableData>[] = [
  { id: 'id', title: 'ID', sortable: true  },
  { id: 'project', title: 'Project', sortable: true },
  { id: 'client', title: 'Client', sortable: true },
  { id: 'budget', title: 'Budget', sortable: true },
  { id: 'status', title: 'Status', sortable: true },
]

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
])

const groupedColumns: TableColumn<GroupedData>[] = [
  { id: 'id', title: 'ID', sortable: true },
  { id: 'product', title: 'Product', sortable: true },
  { id: 'category', title: 'Category', sortable: true, groupable: true },
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
</script>

# DataTable Component

Feature-rich data table with sorting, filtering, and pagination

<DataTable
class='not-prose'
  v-model:visible-columns="visibleColumns"
  v-model:items-per-page="itemsPerPage"
  v-model:page="page"
  v-model:sort-by="sortBy"
  v-model:selected="selected"
  :items="tableData"
  :columns="tableColumns"
  :pageSizeOptions='[25]'
  :total="tableData.length"
  selectMode='multiselect'
/>

<div class="not-prose mt-6 space-y-3">
  <div class="text-sm font-semibold">DataTable State:</div>
  <div class="space-y-2 text-sm font-mono bg-muted p-4 rounded-lg">
    <div><span class="text-muted-foreground">visibleColumns:</span> <span class="text-foreground">{{ visibleColumns }}</span></div>
    <div><span class="text-muted-foreground">itemsPerPage:</span> <span class="text-foreground">{{ itemsPerPage }}</span></div>
    <div><span class="text-muted-foreground">page:</span> <span class="text-foreground">{{ page }}</span></div>
    <div><span class="text-muted-foreground">sortBy:</span> <span class="text-foreground">{{ sortBy }}</span></div>
    <div><span class="text-muted-foreground">selected:</span> <span class="text-foreground">{{ selected }}</span></div>
  </div>
</div>

## Example Usage

```vue
<script setup>
import type { TableColumn } from '@brink-components/component-library'
import { DataTable } from '@brink-components/component-library'
import { ref } from 'vue'

interface TableData {
  id: number
  name: string
  email: string
  role: string
  status: string
}

const tableData = ref<TableData[]>([
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
])

const columns: TableColumn<TableData>[] = [
  { id: 'id', title: 'ID', sortable: true },
  { id: 'name', title: 'Name', sortable: true },
  { id: 'email', title: 'Email', sortable: true },
  { id: 'role', title: 'Role', sortable: true },
  { id: 'status', title: 'Status', sortable: true },
]
</script>

<template>
  <DataTable
    :items="tableData"
    :columns="columns"
    :total="tableData.length"
  />
</template>
```

## Features

- 📊 **Sortable columns** - Click column headers to sort (asc/desc)
- 👁️ **Column visibility** - Show/hide columns via dropdown menu
- 🔽 **Column dropdowns** - Each header has a dropdown with sort and hide options
- 🔍 **Built-in search and filtering**
- 📄 **Pagination support**
- ✅ **Row selection** - Single and multi-select modes
- 🎨 **Customizable with slots**
- 📱 **Responsive design**
- ⚡ **Performance optimized** for large datasets

## New Features

### Column Header Dropdowns

Each column header now has a dropdown menu that allows you to:

- Sort ascending/descending
- Clear sort
- Hide the column

Simply click on any column header to access these options.

### View Options Button

The "View" button in the top-right corner allows you to toggle column visibility. All columns with titles can be shown/hidden from this menu.

---

## Empty Table Example

DataTable with no data shows a customizable empty state.

<div class="not-prose">
<DataTable
  :items="[]"
  :columns="tableColumns"
  :total="0"
/>
</div>

### Code Example

```vue
<script setup>
import { DataTable } from '@brink-components/component-library'

const columns = [
  { id: 'id', title: 'ID', sortable: true },
  { id: 'name', title: 'Name', sortable: true },
  { id: 'email', title: 'Email', sortable: true },
]
</script>

<template>
  <DataTable
    :items="[]"
    :columns="columns"
    :total="0"
  />
</template>
```

---

## Expandable Rows Example

Click on any row to expand and see additional details.

<div class="not-prose">
<DataTable
  :items="expandableData"
  :columns="expandableColumns"
  :total="expandableData.length"
  :expandable="true"
  :bordered="true"
>
  <template #expanded-row="{ item }">
    <div class="p-4 bg-muted/50 space-y-3">
      <div>
        <span class="font-semibold">Description:</span>
        <p class="text-sm text-muted-foreground mt-1">{{ item.description }}</p>
      </div>
      <div v-if="item.tasks">
        <span class="font-semibold">Tasks:</span>
        <ul class="list-disc list-inside mt-1 text-sm text-muted-foreground">
          <li v-for="task in item.tasks" :key="task">{{ task }}</li>
        </ul>
      </div>
    </div>
  </template>
</DataTable>
</div>

### Code Example

```vue
<script setup>
import { DataTable } from '@brink-components/component-library'
import { ref } from 'vue'

const expandableData = ref([
  {
    id: 1,
    project: 'Website Redesign',
    client: 'Acme Corp',
    budget: 50000,
    status: 'In Progress',
    description: 'Complete redesign of the company website'
  },
  // ... more items
])

const columns = [
  { id: 'project', title: 'Project', sortable: true },
  { id: 'client', title: 'Client', sortable: true },
  { id: 'budget', title: 'Budget', sortable: true },
  { id: 'status', title: 'Status', sortable: true },
]
</script>

<template>
  <DataTable
    :items="expandableData"
    :columns="columns"
    :total="expandableData.length"
    :expandable="true"
  >
    <template #expanded-row="{ item }">
      <div class="p-4 bg-muted/50">
        <p>{{ item.description }}</p>
      </div>
    </template>
  </DataTable>
</template>
```

---

## Grouped Data Example

Data grouped by category with collapsible groups.

<div class="not-prose">
<DataTable
  :items="groupedData"
  :columns="groupedColumns"
  :total="groupedData.length"
  :is-grouped="true"
  :groups="groupedByCategory"
  group-by-field="category"
  :bordered="true"
>
  <template #cell:price="{ value }">
    <span class="font-mono">${{ value }}</span>
  </template>
  <template #cell:stock="{ value }">
    <Badge :variant="value > 10 ? 'default' : 'destructive'">
      {{ value }}
    </Badge>
  </template>
</DataTable>
</div>

### Code Example

```vue
<script setup>
import { DataTable } from '@brink-components/component-library'
import { computed, ref } from 'vue'

const groupedData = ref([
  { id: 1, product: 'Laptop', category: 'Electronics', price: 1200, stock: 15 },
  { id: 2, product: 'Desk', category: 'Furniture', price: 350, stock: 8 },
  // ... more items
])

const columns = [
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
  <DataTable
    :items="groupedData"
    :columns="columns"
    :total="groupedData.length"
    :is-grouped="true"
    :groups="groupedByCategory"
    group-by-field="category"
  >
    <template #cell:price="{ value }">
      <span class="font-mono">${{ value }}</span>
    </template>
  </DataTable>
</template>
```
