<template>
  <div class="min-h-screen bg-background text-foreground p-8">
    <div class="max-w-4xl mx-auto space-y-12">
      <!-- Header -->
      <header class="border-b border-border pb-6">
        <h1 class="text-4xl font-bold">Brink Component Library</h1>
        <p class="text-muted-foreground mt-2">Demo showcase of available components</p>
      </header>

      <!-- Button Section -->
      <section class="space-y-4">
        <div>
          <h2 class="text-2xl font-semibold mb-2">Button Component</h2>
          <p class="text-muted-foreground mb-4">
            Versatile button component with multiple variants and sizes
          </p>
        </div>

        <div class="space-y-4">
          <div>
            <h3 class="text-lg font-medium mb-2">Variants</h3>
            <div class="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-medium mb-2">Sizes</h3>
            <div class="flex flex-wrap items-center gap-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
        </div>
      </section>

      <!-- Tag Section -->
      <section class="space-y-4">
        <div>
          <h2 class="text-2xl font-semibold mb-2">Tag Component</h2>
          <p class="text-muted-foreground mb-4">
            Compact tag component for labels and categories
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          <Tag>Default Tag</Tag>
          <Tag>Feature</Tag>
          <Tag>Bug Fix</Tag>
          <Tag>Enhancement</Tag>
        </div>
      </section>

      <!-- DataTable Section -->
      <section class="space-y-4">
        <div>
          <h2 class="text-2xl font-semibold mb-2">DataTable Component</h2>
          <p class="text-muted-foreground mb-4">
            Feature-rich data table with sorting, filtering, and pagination
          </p>
        </div>

        <DataTable
          :items="tableData"
          :columns="tableColumns"
          :total="tableData.length"
        />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from './src/components/ui/button'
import { Tag } from './src/Tag'
import DataTable, { type TableColumn } from './src/components/DataTable'

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
</script>
