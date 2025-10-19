<route lang="yaml">
meta:
  title: AutoForm
</route>

<script setup lang="ts">
import { ref } from 'vue'
import { z } from 'zod'
import AutoForm from '../src/components/ui/auto-form/AutoForm.vue'
import { Button } from '../src/components/ui/button'

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

# AutoForm Component

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

## Example Usage

```vue
<script setup>
import { AutoForm, Button } from '@brink-components/component-library'
import { z } from 'zod'

const formSchema = z.object({
  username: z.string().min(2, 'Username must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  age: z.coerce.number().min(18, 'Must be at least 18 years old'),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms'
  }),
  bio: z.string().min(10).optional(),
})

function onSubmit(values: any) {
  console.log('Form submitted:', values)
}
</script>

<template>
  <AutoForm
    :schema="formSchema"
    @submit="onSubmit"
  >
    <Button type="submit">
      Submit
    </Button>
  </AutoForm>
</template>
```

## Features

- 🎯 Automatic field generation from Zod schema
- ✅ Built-in validation with error messages
- 🎨 Supports various field types (string, number, boolean, enum, date, etc.)
- 📝 Optional fields with `.optional()`
- 🔧 Customizable field configs and labels
