<route lang="yaml">
meta:
  title: DynamicDialog
</route>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '../src/components/ui/button'
import InputSearch from '../src/components/InputSearch.vue'
import SelectListOptions from '../src/components/SelectListOptions.vue'
import { type SelectOption } from '../src/components/SelectOptions.vue'
import { confirmSelect, confirmSelectList, confirmGeneric, alert, openAutoFormDialog, openDynamicDialogComponent } from '../src/components/DynamicDialog'
import { z } from 'zod'

// Dynamic Dialog examples
const dialogOptions: SelectOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
]

const dialogResult = ref<any>(null)

async function handleConfirmSelect() {
  await confirmSelect(
    { title: 'Select Fruits', description: 'Choose your favorite fruits' },
    dialogOptions,
    ['apple', 'banana'],
    async (value) => {
      dialogResult.value = value
      console.log('Selected:', value)
      return true
    }
  )
}

async function handleConfirmSelectList() {
  await confirmSelectList(
    { title: 'Select Items', description: 'Choose items from the list' },
    dialogOptions,
    ['apple'],
    async (value) => {
      dialogResult.value = value
      console.log('Selected:', value)
      return true
    }
  )
}

async function handleConfirmGeneric() {
  await confirmGeneric({
    dialogConfig: { title: 'Enter Value', description: 'Type something' },
    component: InputSearch,
    initialValue: '',
    onOk: async (value) => {
      dialogResult.value = value
      console.log('Entered:', value)
      return true
    }
  })
}

async function handleAlert() {
  await alert(
    async () => {
      console.log('Alert confirmed')
      return true
    },
    'Alert',
    'This is an alert message'
  )
}

// AutoForm Dialog example
const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  age: z.number().min(18, 'Must be 18 or older').optional(),
})

async function handleAutoFormDialog() {
  await openAutoFormDialog(
    { title: 'User Information', description: 'Fill in your details' },
    {
      schema: userSchema,
      initialValues: { name: '', email: '' },
      onSubmit: async (values) => {
        dialogResult.value = values
        console.log('Form submitted:', values)
        return true
      }
    }
  )
}

// Dynamic Dialog Component example
async function handleDynamicDialog() {
  await openDynamicDialogComponent(
    { title: 'Search Something', description: 'Enter your search query' },
    {
      component: InputSearch,
      componentProps: { placeholder: 'Type to search...' }
    },
    'dialog'
  )
}

// Dynamic Drawer example
async function handleDynamicDrawer() {
  await openDynamicDialogComponent(
    { title: 'Select Options', description: 'Choose from the list below' },
    {
      component: SelectListOptions,
      componentProps: {
        options: dialogOptions,
        multiple: true
      }
    },
    'drawer'
  )
}
</script>

<div class="p-8">
<div class="max-w-4xl mx-auto space-y-12 prose dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground">

# DynamicDialog System

Dynamic dialog system for programmatic dialogs and confirmations

<div class="space-y-4 not-prose">
<div class="space-y-2">
<div class="text-sm font-medium">Basic Dialogs</div>
<div class="flex flex-wrap gap-2">
<Button @click="handleConfirmSelect" variant="default">Confirm Select</Button>
<Button @click="handleConfirmSelectList" variant="default">Confirm Select List</Button>
<Button @click="handleConfirmGeneric" variant="default">Confirm Generic</Button>
<Button @click="handleAlert" variant="destructive">Show Alert</Button>
</div>
</div>

<div class="space-y-2">
<div class="text-sm font-medium">Advanced Dialogs</div>
<div class="flex flex-wrap gap-2">
<Button @click="handleAutoFormDialog" variant="secondary">AutoForm Dialog</Button>
<Button @click="handleDynamicDialog" variant="secondary">Dynamic Dialog</Button>
<Button @click="handleDynamicDrawer" variant="outline">Dynamic Drawer</Button>
</div>
</div>

<div v-if="dialogResult" class="space-y-2">
<div class="text-sm font-medium">Last Dialog Result:</div>
<div class="text-sm text-muted-foreground bg-muted p-2 rounded">{{ JSON.stringify(dialogResult) }}</div>
</div>
</div>

## Features

- 🎯 Programmatic dialog API
- ✅ Confirmation dialogs with custom components
- 📝 AutoForm integration for form dialogs
- 🎨 Dialog and Drawer modes
- 🔄 Async/await pattern
- 🎭 Type-safe with TypeScript

## Example Usage

```vue
<template>
  <div>
    <Button @click="showConfirmDialog">Confirm Select</Button>
    <DynamicComponentProvider />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button } from '@brink-components/component-library'
import { confirmSelect, confirmSelectList, confirmGeneric, alert } from '@brink-components/component-library'
import { DynamicComponentProvider } from '@brink-components/component-library'

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' }
]

async function showConfirmDialog() {
  await confirmSelect(
    { title: 'Select Items', description: 'Choose items' },
    options,
    ['1'],
    async (value) => {
      console.log('Selected:', value)
      return true // Return true to close dialog
    }
  )
}

async function showConfirmList() {
  await confirmSelectList(
    'Select from List',
    options,
    [],
    async (value) => {
      console.log('Selected:', value)
      return true
    }
  )
}

async function showGenericDialog() {
  await confirmGeneric({
    dialogConfig: { title: 'Enter Value' },
    component: InputSearch,
    initialValue: '',
    onOk: async (value) => {
      console.log('Value:', value)
      return true
    }
  })
}

async function showAlert() {
  await alert(
    async () => {
      console.log('Alert confirmed')
      return true
    },
    'Alert Title',
    'Alert description'
  )
}

// AutoForm Dialog with Zod schema
import { z } from 'zod'

const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  age: z.number().min(18, 'Must be 18 or older').optional(),
})

async function showAutoFormDialog() {
  await openAutoFormDialog(
    { title: 'User Information', description: 'Fill in your details' },
    {
      schema: userSchema,
      initialValues: { name: '', email: '' },
      onSubmit: async (values) => {
        console.log('Form submitted:', values)
        return true
      }
    }
  )
}

// Dynamic Dialog Component (opens as dialog)
async function showDynamicDialog() {
  await openDynamicDialogComponent(
    { title: 'Search Something', description: 'Enter your search query' },
    {
      component: InputSearch,
      componentProps: { placeholder: 'Type to search...' }
    },
    'dialog' // Type: 'dialog' or 'drawer'
  )
}

// Dynamic Drawer (opens as drawer from side)
async function showDynamicDrawer() {
  await openDynamicDialogComponent(
    { title: 'Select Options', description: 'Choose from the list' },
    {
      component: SelectListOptions,
      componentProps: {
        options: [
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' }
        ],
        multiple: true
      }
    },
    'drawer' // Opens as a side drawer
  )
}
</script>
```

**Important:** You must include `<DynamicComponentProvider />` in your app root (e.g., App.vue) for dynamic dialogs to work.

</div>
</div>
