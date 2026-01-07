# Translation System

Brink Components includes a flexible translation system that allows you to customize all user-facing text in the component library.

## How It Works

By default, all components display English text. You can provide your own translation function to customize this text for any language or localization needs.

## Quick Start

### Option 1: Use Without Translations (Default)

Components work out of the box with English text:

```vue
<template>
  <InputRange v-model="value" />
  <!-- Displays "Min" and "Max" placeholders -->
</template>
```

### Option 2: Provide Custom Translations

Use Vue's `provide` API to inject your translation function:

```typescript
// main.ts or app setup
import { createApp } from 'vue'
import { TranslationKey } from 'brink-components'
import { useI18n } from 'vue-i18n' // or any i18n library

const app = createApp(App)

// Provide your translation function
app.provide(TranslationKey, (key: string, fallback: string) => {
  const { t, te } = useI18n()
  return te(key) ? t(key) : fallback
})

app.mount('#app')
```

## Translation Keys

Here are all the translation keys used in the component library:

### Common
- `common.novalue` - "No value" (DisplayGraduated)
- `common.noValues` - "No values" (EmptyMini)
- `common.from` - "From" (InputGraduated)
- `common.value` - "Value" (InputGraduated)
- `common.add` - "Add" (InputGraduated)
- `common.clear` - "Clear All" (InputGraduated)
- `common.select` - "Select" (SelectOptions)
- `common.reset` - "Reset" (SelectOptions)
- `common.addItem` - "Add Item" (SelectOptions, SelectListOptions)
- `common.true` - "True" (InputBoolean)
- `common.false` - "False" (InputBoolean)
- `common.cancel` - "Cancel" (DynamicConfirmComponentDialog)
- `common.ok` - "Ok" (DynamicConfirmComponentDialog)
- `common.elementCountSelected` - "{count} selected" (SelectListOptions)

### Input Components
- `input.range.min` - "Min" (InputRange)
- `input.range.max` - "Max" (InputRange)
- `input.search.placeholder` - "Search..." (InputSearch)
- `input.filter.placeholder` - "Filter.." (SelectListOptions)

### DataTable
- `datatable.view` - "View" (DataTableViewOptions)
- `datatable.toggleColumns` - "Toggle columns" (DataTableViewOptions)
- `datatable.sort.asc` - "Asc" (DataTableColumnHeader)
- `datatable.sort.desc` - "Desc" (DataTableColumnHeader)
- `datatable.sort.clear` - "Clear sort" (DataTableColumnHeader)
- `datatable.hide` - "Hide" (DataTableColumnHeader)

### Pagination
- `pagination.first` - "First" (PaginationFirst)
- `pagination.previous` - "Previous" (PaginationPrevious)
- `pagination.next` - "Next" (PaginationNext)
- `pagination.last` - "Last" (PaginationLast)

## Integration Examples

### Vue I18n

```typescript
import { createI18n } from 'vue-i18n'
import { TranslationKey } from 'brink-components'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: {
      common: {
        novalue: 'No value',
        add: 'Add',
        // ... other keys
      },
      input: {
        range: {
          min: 'Minimum',
          max: 'Maximum',
        },
      },
    },
    es: {
      common: {
        novalue: 'Sin valor',
        add: 'Agregar',
      },
      input: {
        range: {
          min: 'Mínimo',
          max: 'Máximo',
        },
      },
    },
  },
})

app.use(i18n)

app.provide(TranslationKey, (key: string, fallback: string) => {
  const { t, te } = i18n.global
  return te(key) ? t(key) : fallback
})
```

### Custom Translation Function

```typescript
import { TranslationKey } from 'brink-components'

const translations = {
  'common.add': 'Add Item',
  'common.clear': 'Remove All',
  'input.range.min': 'From',
  'input.range.max': 'To',
}

app.provide(TranslationKey, (key: string, fallback: string) => {
  return translations[key] || fallback
})
```

### Per-Component Translation

You can also provide translations at a component level:

```vue
<script setup>
import { TranslationKey } from 'brink-components'
import { provide } from 'vue'

provide(TranslationKey, (key, fallback) => {
  // Your translation logic here
  return customTranslations[key] || fallback
})
</script>

<template>
  <InputRange v-model="value" />
  <!-- Will use your provided translations -->
</template>
```

## Advanced Usage

### Using Props for Specific Overrides

Some components accept props that override the translation system for specific text:

```vue
<template>
  <!-- Override placeholders directly -->
  <InputRange
    v-model="range"
    :placeholder="['Minimum', 'Maximum']"
  />

  <!-- Or use slots for complete customization -->
  <PaginationNext>
    <CustomNextButton />
  </PaginationNext>
</template>
```

### TypeScript Support

The translation system is fully typed:

```typescript
import type { TranslationFunction } from 'brink-components'

const myTranslation: TranslationFunction = (key, fallback) => {
  // key and fallback are both strings
  return translations[key] || fallback
}
```

## Creating Your Own Translatable Components

If you're extending the component library, you can use the same system:

```vue
<script setup lang="ts">
import { useComponentTranslation } from 'brink-components'

const t = useComponentTranslation()
</script>

<template>
  <button>{{ t('mycomponent.label', 'Default Label') }}</button>
</template>
```

## Best Practices

1. **Always provide fallback text**: The second parameter to `t()` is the fallback English text
2. **Use namespaced keys**: Group keys by component or feature (e.g., `datatable.view`)
3. **Return fallback when key doesn't exist**: This ensures components always have text
4. **Test without translations**: Components should work perfectly with default English text

## Notes

- All translation keys are optional - components work with English defaults
- The translation function receives both the key and fallback, giving you flexibility
- Components will never break due to missing translations - they'll use the fallback
- The system has zero runtime dependencies
