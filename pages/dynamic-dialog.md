<route lang="yaml">
meta:
  title: DynamicDialog
</route>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '../src/components/ui/button'
import InputSearch from '../src/components/InputSearch.vue'
import SelectListOptions from '../src/components/SelectListOptions.vue'
import TestInput from '../src/components/DynamicDialog/TestInput.vue'
import { type SelectOption } from '../src/components/SelectOptions.vue'
import { confirmSelect, confirmSelectList, confirmGeneric, confirmText, confirmNumber, confirmBoolean, alert, openDynamicDialogComponent } from '../src/components/DynamicDialog'
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
    }
  )
}

async function handleConfirmGeneric() {
  await confirmGeneric({
    dialogConfig: { title: 'Enter Value', description: 'Type something' },
    component: TestInput,
    initialValue: '',
    onOk: async (value) => {
      dialogResult.value = value
      console.log('Entered:', value)
      throw {field1: ['error1', 'error2']}
    }
  })
}

async function handleConfirmText() {
  await confirmText(
    { title: 'Enter Name', description: 'Please enter your name' },
    'John Doe',
    async (value) => {
      dialogResult.value = value
      console.log('Entered name:', value)
      return true
    },
    { placeholder: 'Enter your name...' }
  )
}

async function handleConfirmNumber() {
  await confirmNumber(
    { title: 'Enter Quantity', description: 'How many items do you want?' },
    10,
    async (value) => {
      dialogResult.value = value
      console.log('Entered quantity:', value)
      return true
    },
    { placeholder: 'Enter quantity...' }
  )
}

async function handleConfirmBoolean() {
  await confirmBoolean(
    { title: 'Enable Feature', description: 'Do you want to enable this feature?' },
    false,
    async (value) => {
      dialogResult.value = value
      console.log('User choice:', value)
      return true
    }
  )
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

# DynamicDialog System

Dynamic dialog system for programmatic dialogs and confirmations

<div class="space-y-4 not-prose">
<div class="space-y-2">
<div class="text-sm font-medium">Basic Dialogs</div>
<div class="flex flex-wrap gap-2">
<Button @click="handleConfirmSelect" variant="default">Confirm Select</Button>
<Button @click="handleConfirmSelectList" variant="default">Confirm Select List</Button>
<Button @click="handleConfirmText" variant="default">Confirm Text</Button>
<Button @click="handleConfirmNumber" variant="default">Confirm Number</Button>
<Button @click="handleConfirmBoolean" variant="default">Confirm Boolean</Button>
<Button @click="handleConfirmGeneric" variant="default">Confirm Generic</Button>
<Button @click="handleAlert" variant="destructive">Show Alert</Button>
</div>
</div>

<div class="space-y-2">
<div class="text-sm font-medium">Advanced Dialogs</div>
<div class="flex flex-wrap gap-2">
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
- 🎨 Dialog and Drawer modes
- 🔄 Async/await pattern
- 🎭 Type-safe with TypeScript

## Example Usage

```vue
<script setup>
import {
  alert,
  Button,
  confirmBoolean,
  confirmGeneric,
  confirmNumber,
  confirmSelect,
  confirmSelectList,
  confirmText,
  DynamicComponentProvider
} from '@brink-components/component-library'
import { ref } from 'vue'

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' }
]

// Confirm Select - Multi-select dropdown dialog
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

// Confirm Select List - Filterable list dialog
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

// Confirm Text - Text input dialog
async function showConfirmText() {
  await confirmText(
    { title: 'Enter Name', description: 'Please enter your name' },
    'John Doe',
    async (value) => {
      if (!value || value.trim() === '') {
        alert(() => true, 'Error', 'Name is required')
        return false // Return false to keep dialog open
      }
      console.log('Name:', value)
      return true
    },
    { placeholder: 'Enter your name...' }
  )
}

// Confirm Number - Number input dialog
async function showConfirmNumber() {
  await confirmNumber(
    { title: 'Enter Quantity', description: 'How many items?' },
    1,
    async (value) => {
      if (value < 1 || value > 100) {
        alert(() => true, 'Error', 'Quantity must be between 1 and 100')
        return false // Return false to keep dialog open
      }
      console.log('Quantity:', value)
      return true
    },
    { placeholder: 'Enter quantity...', min: 1, max: 100 }
  )
}

// Confirm Boolean - Yes/No choice dialog
async function showConfirmBoolean() {
  await confirmBoolean(
    { title: 'Enable Feature', description: 'Do you want to enable this feature?' },
    false,
    async (value) => {
      console.log('User selected:', value ? 'Yes' : 'No')
    }
  )
}

// Confirm Boolean with custom labels
async function showConfirmBooleanCustom() {
  await confirmBoolean(
    'Change Status',
    true,
    async (value) => {
      console.log('Status:', value ? 'Active' : 'Inactive')
    },
    { trueLabel: 'Active', falseLabel: 'Inactive' }
  )
}

// Generic Dialog - Use any component
async function showGenericDialog() {
  await confirmGeneric({
    dialogConfig: { title: 'Enter Value' },
    component: InputSearch,
    initialValue: '',
    onOk: async (value) => {
      console.log('Value:', value)

    }
  })
}

// Alert - Simple confirmation
async function showAlert() {
  await alert(
    async () => {
      console.log('Alert confirmed')
      
    },
    'Alert Title',
    'Alert description'
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

<template>
  <div>
    <Button @click="showConfirmDialog">Confirm Select</Button>
    <Button @click="showConfirmList">Confirm List</Button>
    <Button @click="showConfirmText">Confirm Text</Button>
    <Button @click="showConfirmNumber">Confirm Number</Button>
    <Button @click="showConfirmBoolean">Confirm Boolean</Button>
    <Button @click="showGenericDialog">Generic Dialog</Button>
    <Button @click="showAlert">Show Alert</Button>

    <!-- Required: Add this to your app root -->
    <DynamicComponentProvider />
  </div>
</template>
```

## API Reference

### confirmText

Text input confirmation dialog.

**Parameters:**
- `dialogConfig`: `{ title: string, description?: string } | string` - Dialog configuration or title
- `initialValue`: `string` - Initial text value
- `onOk`: `(value: string) => Promise<boolean> | boolean` - Callback when OK is clicked. Return `true` to close, `false` to keep open
- `componentProps?`: `Partial<ComponentProps<typeof Input>>` - Optional props for the Input component

```ts
await confirmText(
  'Enter Email',
  '',
  async (email) => {
    if (!email.includes('@')) return false
    await saveEmail(email)
    return true
  },
  { placeholder: 'email@example.com', type: 'email' }
)
```

### confirmNumber

Number input confirmation dialog.

**Parameters:**
- `dialogConfig`: `{ title: string, description?: string } | string` - Dialog configuration or title
- `initialValue`: `number` - Initial number value
- `onOk`: `(value: number) => Promise<boolean> | boolean` - Callback when OK is clicked
- `componentProps?`: `Partial<ComponentProps<typeof Input>>` - Optional props for the Input component

```ts
await confirmNumber(
  { title: 'Set Price', description: 'Enter the product price' },
  0,
  async (price) => {
    if (price <= 0) return false
    await updatePrice(price)
    return true
  },
  { min: 0, max: 9999, step: 0.01 }
)
```

### confirmBoolean

Boolean choice confirmation dialog (Yes/No).

**Parameters:**
- `dialogConfig`: `{ title: string, description?: string } | string` - Dialog configuration or title
- `initialValue`: `boolean` - Initial boolean value
- `onOk`: `(value: boolean) => Promise<boolean> | boolean` - Callback when OK is clicked
- `options?`: `{ trueLabel?: string, falseLabel?: string }` - Custom labels for true/false options (defaults to "Yes"/"No")
- `componentProps?`: `Partial<ComponentProps<typeof SelectOptions>>` - Optional props for the SelectOptions component

```ts
// Simple Yes/No
await confirmBoolean(
  'Are you sure?',
  false,
  async (value) => {
    console.log('User confirmed:', value)
    return true
  }
)

// Custom labels
await confirmBoolean(
  { title: 'Change Status', description: 'Update the item status' },
  true,
  async (value) => {
    await updateStatus(value ? 'active' : 'inactive')
    return true
  },
  { trueLabel: 'Active', falseLabel: 'Inactive' }
)

// Enable/Disable example
await confirmBoolean(
  'Feature Toggle',
  false,
  async (enabled) => {
    await toggleFeature(enabled)
    return true
  },
  { trueLabel: 'Enable', falseLabel: 'Disable' }
)
```

**Important:** You must include `<DynamicComponentProvider />` in your app root (e.g., App.vue) for dynamic dialogs to work.
