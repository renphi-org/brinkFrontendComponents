# Tag

A flexible tag component with multiple semantic and visual variants.

## Installation

```bash
npm install @brink-components/component-library
```

## Import

```vue
<script setup>
import { Tag } from '@brink-components/component-library'
</script>
```

## Examples

### Basic Variants

<script setup>
import { Tag } from '@brink-components/component-library'
</script>

<div class="flex flex-wrap gap-2 my-4">
  <Tag variant="default">Default</Tag>
  <Tag variant="destructive">Destructive</Tag>
  <Tag variant="destructive-outline">Destructive Outline</Tag>
  <Tag variant="outline">Outline</Tag>
  <Tag variant="tag">Tag</Tag>
</div>

```vue
<Tag variant="default">Default</Tag>
<Tag variant="destructive">Destructive</Tag>
<Tag variant="destructive-outline">Destructive Outline</Tag>
<Tag variant="outline">Outline</Tag>
<Tag variant="tag">Tag</Tag>
```

### Status Variants

<div class="flex flex-wrap gap-2 my-4">
  <Tag variant="success">Success</Tag>
  <Tag variant="draft">Draft</Tag>
  <Tag variant="released">Released</Tag>
  <Tag variant="archived">Archived</Tag>
</div>

```vue
<Tag variant="success">Success</Tag>
<Tag variant="draft">Draft</Tag>
<Tag variant="released">Released</Tag>
<Tag variant="archived">Archived</Tag>
```

### Type Variants

<div class="flex flex-wrap gap-2 my-4">
  <Tag variant="attribute">Attribute</Tag>
  <Tag variant="attributetype">Attribute Type</Tag>
  <Tag variant="attributeset">Attribute Set</Tag>
  <Tag variant="attributesetgroup">Attribute Set Group</Tag>
  <Tag variant="choice">Choice</Tag>
  <Tag variant="outputchannel">Output Channel</Tag>
  <Tag variant="unit">Unit</Tag>
</div>

```vue
<Tag variant="attribute">Attribute</Tag>
<Tag variant="attributetype">Attribute Type</Tag>
<Tag variant="attributeset">Attribute Set</Tag>
<Tag variant="attributesetgroup">Attribute Set Group</Tag>
<Tag variant="choice">Choice</Tag>
<Tag variant="outputchannel">Output Channel</Tag>
<Tag variant="unit">Unit</Tag>
```

### Domain Variants

<div class="flex flex-wrap gap-2 my-4">
  <Tag variant="workprocess">Work Process</Tag>
  <Tag variant="article">Article</Tag>
  <Tag variant="partlist">Part List</Tag>
  <Tag variant="assembly">Assembly</Tag>
</div>

```vue
<Tag variant="workprocess">Work Process</Tag>
<Tag variant="article">Article</Tag>
<Tag variant="partlist">Part List</Tag>
<Tag variant="assembly">Assembly</Tag>
```

### Custom Classes

<div class="flex flex-wrap gap-2 my-4">
  <Tag class="!text-xs">Smaller Text</Tag>
  <Tag class="uppercase">Uppercase</Tag>
  <Tag class="tracking-wider">Wider Tracking</Tag>
</div>

```vue
<Tag class="!text-xs">Smaller Text</Tag>
<Tag class="uppercase">Uppercase</Tag>
<Tag class="tracking-wider">Wider Tracking</Tag>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | See variants below | `'default'` | The visual style variant |
| `class` | `string` | - | Additional CSS classes |

### Available Variants

**Basic:**
- `default` - Primary colored tag
- `destructive` - Destructive/error state
- `destructive-outline` - Outlined destructive variant
- `outline` - Outlined variant
- `tag` - Generic tag style

**Status:**
- `success` - Success/positive state
- `draft` - Draft state
- `released` - Released state
- `archived` - Archived state

**Type:**
- `attribute` - Teal colored for attributes
- `attributetype` - Indigo colored for attribute types
- `attributeset` - Violet colored for attribute sets
- `attributesetgroup` - Cyan colored for attribute set groups
- `choice` - Fuchsia colored for choices
- `outputchannel` - Sky colored for output channels
- `unit` - Monospace styled for units

**Domain:**
- `workprocess` - Blue tinted for work processes
- `article` - Emerald tinted for articles
- `partlist` - Emerald tinted for part lists
- `assembly` - Purple tinted for assemblies

## Styling

The Tag component uses small text (`!text-[10px]`) by default with semibold font weight. You can override these styles using the `class` prop with the `!important` prefix if needed.

## Accessibility

- Uses semantic `<span>` element
- Automatically hides when empty (`empty:hidden`)
- Proper color contrast for all variants
- Truncates long text to prevent overflow
