<route lang="yaml">
meta:
  title: All Components
</route>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '../src/components/ui/button'
import { Tag } from '../src/Tag'
import DataTable, { type TableColumn } from '../src/components/DataTable'
import DateFormat from '../src/components/DateFormat.vue'
import SelectOptions, { type SelectOption } from '../src/components/SelectOptions.vue'
import InputSearch from '../src/components/InputSearch.vue'
import SelectListOptions from '../src/components/SelectListOptions.vue'
import Empty from '../src/components/Empty.vue'
import InputRange, { type ValueRange } from '../src/components/InputRange.vue'
import InputGraduated, { type ValueGraduated } from '../src/components/InputGraduated.vue'
import InputBoolean from '../src/components/InputBoolean.vue'
import { z } from 'zod'
import AutoForm from '../src/components/ui/auto-form/AutoForm.vue'

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

// DateFormat examples
const now = new Date()
const pastDate = new Date(now.getTime() - 2 * 60 * 60 * 1000) // 2 hours ago

// Select examples
const selectOptions: SelectOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
]
const selectedOption = ref('option1')
const selectedMultiple = ref(['option1', 'option2'])

// Search example
const searchValue = ref('')

// Input examples
const rangeValue = ref<ValueRange>([10, 100])
const graduatedValue = ref<ValueGraduated[]>([
  { from: 0, value: 10 },
  { from: 100, value: 8 },
  { from: 500, value: 5 },
])
const booleanValue = ref(true)

// AutoForm example
const autoFormSchema = z.object({
  username: z
    .string({
      required_error: 'Username is required.',
    })
    .min(2, {
      message: 'Username must be at least 2 characters.',
    }),
  email: z
    .string({
      required_error: 'Email is required.',
    })
    .email({
      message: 'Please enter a valid email address.',
    }),
  age: z.coerce
    .number({
      required_error: 'Age is required.',
    })
    .min(18, {
      message: 'You must be at least 18 years old.',
    })
    .max(120, {
      message: 'Please enter a valid age.',
    }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions.',
  }),
  bio: z.string().min(10, {
    message: 'Bio must be at least 10 characters.',
  }).optional(),
})

const autoFormValues = ref<any>(null)

function handleAutoFormSubmit(values: any) {
  autoFormValues.value = values
  console.log('Form submitted:', values)
}
</script>

<div class="p-8">
<div class="max-w-4xl mx-auto space-y-12 prose dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground">


# Brink Component Library

Demo showcase of available components

---

## Button Component

Versatile button component with multiple variants and sizes

### Variants

<div class="flex flex-wrap gap-2">
  <Button variant="default">Default</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
</div>

### Sizes

<div class="flex flex-wrap items-center gap-2">
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="lg">Large</Button>
</div>

---

## Tag Component

Compact tag component for labels and categories

### Variants

<div class="flex flex-wrap gap-2 not-prose">
  <Tag variant="default">Default</Tag>
  <Tag variant="destructive">Destructive</Tag>
  <Tag variant="destructive-outline">Destructive Outline</Tag>
  <Tag variant="outline">Outline</Tag>
  <Tag variant="success">Success</Tag>
  <Tag variant="draft">Draft</Tag>
  <Tag variant="released">Released</Tag>
  <Tag variant="archived">Archived</Tag>
</div>

### Special Purpose Variants

<div class="flex flex-wrap gap-2 not-prose">
  <Tag variant="attribute">Attribute</Tag>
  <Tag variant="attributetype">Attribute Type</Tag>
  <Tag variant="attributeset">Attribute Set</Tag>
  <Tag variant="attributesetgroup">Attribute Set Group</Tag>
  <Tag variant="choice">Choice</Tag>
  <Tag variant="outputchannel">Output Channel</Tag>
  <Tag variant="unit">Unit</Tag>
</div>

### Example Usage

```vue
<template>
  <Tag>Default Tag</Tag>
  <Tag variant="success">Success</Tag>
  <Tag variant="destructive">Error</Tag>
  <Tag variant="outline">Outline</Tag>
</template>

<script setup>
import { Tag } from '@brink-components/component-library'
</script>
```

---

## DataTable Component

Feature-rich data table with sorting, filtering, and pagination

<DataTable
  :items="tableData"
  :columns="tableColumns"
  :total="tableData.length"
/>

---

## DateFormat Component

Format dates and timestamps with locale support and relative time

<div class="space-y-4 not-prose">
<div class="space-y-2">
<div class="text-sm font-medium">Standard Format</div>
<div class="text-muted-foreground"><DateFormat :date="now" /></div>
</div>

<div class="space-y-2">
<div class="text-sm font-medium">Custom Format</div>
<div class="text-muted-foreground"><DateFormat :date="now" format="YYYY-MM-DD" /></div>
</div>

<div class="space-y-2">
<div class="text-sm font-medium">Relative Time</div>
<div class="text-muted-foreground"><DateFormat :date="pastDate" :relative="true" /></div>
</div>
</div>

### Example Usage

```vue
<template>
  <DateFormat :date="new Date()" />
  <DateFormat :date="timestamp" format="YYYY-MM-DD" />
  <DateFormat :date="pastDate" :relative="true" />
</template>

<script setup>
import { DateFormat } from '@brink-components/component-library'
</script>
```

---

## InputSearch Component

Search input with icon and submit on enter

<div class="not-prose">
<InputSearch v-model="searchValue" placeholder="Search components..." />
<div v-if="searchValue" class="text-sm text-muted-foreground mt-2">Search value: {{ searchValue }}</div>
</div>

### Example Usage

```vue
<template>
  <InputSearch v-model="search" @onSubmit="handleSearch" />
</template>

<script setup>
import { ref } from 'vue'
import { InputSearch } from '@brink-components/component-library'

const search = ref('')
const handleSearch = (value: string) => {
  console.log('Searching for:', value)
}
</script>
```

---

## SelectOptions Component

Advanced select with single and multiple selection support

<div class="space-y-4">
<div class="not-prose">
<div class="text-sm font-medium mb-2">Single Select</div>
<SelectOptions v-model="selectedOption" :options="selectOptions" placeholder="Choose an option" />
<div class="text-sm text-muted-foreground mt-2">Selected: {{ selectedOption }}</div>
</div>

<div class="not-prose">
<div class="text-sm font-medium mb-2">Multiple Select</div>
<SelectOptions v-model="selectedMultiple" :options="selectOptions" :multiple="true" placeholder="Choose options" />
<div class="text-sm text-muted-foreground mt-2">Selected: {{ selectedMultiple.join(', ') }}</div>
</div>
</div>

### Example Usage

```vue
<template>
  <SelectOptions
    v-model="selected"
    :options="options"
    placeholder="Select an option"
  />

  <SelectOptions
    v-model="multiSelect"
    :options="options"
    :multiple="true"
  />
</template>

<script setup>
import { ref } from 'vue'
import { SelectOptions } from '@brink-components/component-library'

const selected = ref('')
const multiSelect = ref([])
const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' }
]
</script>
```

---

## SelectListOptions Component

Listbox with search/filter functionality

<div class="not-prose max-w-sm">
<SelectListOptions :options="selectOptions" v-model="selectedOption" />
</div>

### Example Usage

```vue
<template>
  <SelectListOptions
    v-model="selected"
    :options="options"
    :multiple="true"
  />
</template>

<script setup>
import { SelectListOptions } from '@brink-components/component-library'
</script>
```

---

## Empty Component

Empty state indicator for lists and data

<div class="not-prose">
<Empty />
<Empty>Custom empty message</Empty>
</div>

### Example Usage

```vue
<template>
  <Empty v-if="!items.length" />
  <Empty v-if="!results.length">No search results found</Empty>
</template>

<script setup>
import { Empty } from '@brink-components/component-library'
</script>
```

---

## InputRange Component

Range input for min/max values

<div class="not-prose max-w-sm">
<InputRange v-model="rangeValue" :placeholder="['Min', 'Max']" />
<div class="text-sm text-muted-foreground mt-2">Range: {{ rangeValue[0] }} - {{ rangeValue[1] }}</div>
</div>

### Example Usage

```vue
<template>
  <InputRange v-model="range" :placeholder="['Min', 'Max']" />
</template>

<script setup>
import { ref } from 'vue'
import { InputRange } from '@brink-components/component-library'
import type { ValueRange } from '@brink-components/component-library'

const range = ref<ValueRange>([0, 100])
</script>
```

---

## InputGraduated Component

Graduated pricing/value input with popover

<div class="not-prose max-w-sm">
<InputGraduated v-model="graduatedValue" />
<div class="text-sm text-muted-foreground mt-2">{{ graduatedValue.length }} tiers defined</div>
</div>

### Example Usage

```vue
<template>
  <InputGraduated v-model="graduated" />
</template>

<script setup>
import { ref } from 'vue'
import { InputGraduated } from '@brink-components/component-library'
import type { ValueGraduated } from '@brink-components/component-library'

const graduated = ref<ValueGraduated[]>([
  { from: 0, value: 10 },
  { from: 100, value: 8 }
])
</script>
```

---

## InputBoolean Component

Boolean select input (True/False)

<div class="not-prose max-w-sm">
<InputBoolean v-model="booleanValue" />
<div class="text-sm text-muted-foreground mt-2">Value: {{ booleanValue }}</div>
</div>

### Example Usage

```vue
<template>
  <InputBoolean v-model="enabled" />
</template>

<script setup>
import { ref } from 'vue'
import { InputBoolean } from '@brink-components/component-library'

const enabled = ref(true)
</script>
```

---

## AutoForm Component

Automatically generate forms from Zod schemas with validation

<div class="not-prose">
<AutoForm
  :schema="autoFormSchema"
  @submit="handleAutoFormSubmit"
  class="space-y-4 max-w-md"
>
  <Button type="submit" class="w-full mt-4">Submit Form</Button>
</AutoForm>

<div v-if="autoFormValues" class="mt-4 space-y-2">
  <div class="text-sm font-medium">Submitted Values:</div>
  <div class="text-sm text-muted-foreground bg-muted p-3 rounded">
    <pre>{{ JSON.stringify(autoFormValues, null, 2) }}</pre>
  </div>
</div>
</div>

### Example Usage

```vue
<template>
  <AutoForm
    :schema="formSchema"
    @submit="onSubmit"
  >
    <Button type="submit">Submit</Button>
  </AutoForm>
</template>

<script setup>
import { z } from 'zod'
import { AutoForm, Button } from '@brink-components/component-library'

const formSchema = z.object({
  username: z.string().min(2, 'Username must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  age: z.coerce.number().min(18, 'Must be at least 18 years old'),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms'
  }),
  bio: z.string().min(10).optional(),
})

function onSubmit(values: any) {
  console.log('Form submitted:', values)
}
</script>
```

**Features:**
- 🎯 Automatic field generation from Zod schema
- ✅ Built-in validation with error messages
- 🎨 Supports various field types (string, number, boolean, enum, date, etc.)
- 📝 Optional fields with `.optional()`
- 🔧 Customizable field configs and labels

</div>
</div>
