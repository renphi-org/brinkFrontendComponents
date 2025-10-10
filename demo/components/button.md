# Button

A versatile button component with multiple variants and sizes.

## Installation

```bash
npm install @brink-components/component-library
```

## Import

```vue
<script setup>
import { Button } from '@brink-components/component-library'
</script>
```

## Examples

### Variants

<script setup>
import { Button } from '@brink-components/component-library'
</script>

<iframe data-why class="h-20">
  <div class="flex flex-wrap gap-4">
    <Button variant="default">Default</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
</iframe>

```vue
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

### Sizes

<iframe data-why class="h-20">
  <div class="flex flex-wrap items-center gap-4">
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
  </div>
</iframe>

```vue
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

### Icon Buttons

<iframe data-why class="h-20">
  <div class="flex flex-wrap items-center gap-4">
    <Button size="icon-sm" variant="outline">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
    </Button>
    <Button size="icon" variant="outline">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
    </Button>
    <Button size="icon-lg" variant="outline">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
    </Button>
  </div>
</iframe>

```vue
<Button size="icon-sm" variant="outline">
  <!-- icon -->
</Button>
<Button size="icon" variant="outline">
  <!-- icon -->
</Button>
<Button size="icon-lg" variant="outline">
  <!-- icon -->
</Button>
```

### With Icon

<iframe data-why class="h-20">
  <Button>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    Button with Icon
  </Button>
</iframe>

```vue
<Button>
  <Icon />
  Button with Icon
</Button>
```

### Disabled State

<iframe data-why class="h-20">
  <div class="flex flex-wrap gap-4">
    <Button disabled>Disabled Button</Button>
    <Button variant="outline" disabled>Disabled Outline</Button>
  </div>
</iframe>

```vue
<Button disabled>Disabled Button</Button>
<Button variant="outline" disabled>Disabled Outline</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | The visual style variant |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon' \| 'icon-sm' \| 'icon-lg'` | `'default'` | The size of the button |
| `as` | `string \| Component` | `'button'` | The element or component to render as |
| `asChild` | `boolean` | `false` | Merge props onto child element |
| `class` | `string` | - | Additional CSS classes |

## Accessibility

- Uses semantic `<button>` element by default
- Supports keyboard navigation
- Proper focus states with visible focus ring
- Disabled state prevents interaction
