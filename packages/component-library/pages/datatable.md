<route lang="yaml">
meta:
  title: DataTable
</route>

<script setup lang="ts">
import { ref } from 'vue'
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
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Editor', status: 'Active' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Active' },
  { id: 6, name: 'Diana Prince', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  { id: 7, name: 'Ethan Hunt', email: 'ethan@example.com', role: 'User', status: 'Inactive' },
])

const tableColumns: TableColumn<TableData>[] = [
  { id: 'id', title: 'ID', sortable: true },
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
</script>

<div class="p-8">
<div class="max-w-4xl mx-auto space-y-12 prose dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground">

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
<template>
  <DataTable
    :items="tableData"
    :columns="columns"
    :total="tableData.length"
  />
</template>

<script setup>
import { ref } from 'vue'
import { DataTable } from '@brink-components/component-library'
import type { TableColumn } from '@brink-components/component-library'

type TableData = {
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
```

## Features

- 📊 Sortable columns
- 🔍 Built-in search and filtering
- 📄 Pagination support
- ✅ Row selection (single and multi-select)
- 🎨 Customizable with slots
- 📱 Responsive design
- ⚡ Performance optimized for large datasets

</div>
</div>
