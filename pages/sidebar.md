<route lang="yaml">
meta:
  title: AppSidebar
</route>

<script setup lang="ts">
import { Home, Settings, Users, FileText, HelpCircle } from 'lucide-vue-next'
import type { AppSidebarConfig } from '../src/components/AppSidebar.types'

// Example sidebar configuration
const exampleConfig: AppSidebarConfig = {
  title: 'My Application',
  collapsible: 'icon',
  menuGroups: [
    {
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: Home,
          isActive: true,
        },
      ],
    },
    {
      title: 'Main',
      items: [
        {
          title: 'Users',
          url: '/users',
          icon: Users,
          items: [
            {
              title: 'All Users',
              url: '/users/all',
            },
            {
              title: 'Admins',
              url: '/users/admins',
            },
            {
              title: 'User Groups',
              url: '/users/groups',
            },
          ],
        },
        {
          title: 'Documents',
          url: '/documents',
          icon: FileText,
        },
        {
          title: 'Settings',
          url: '/settings',
          icon: Settings,
          items: [
            {
              title: 'General',
              url: '/settings/general',
            },
            {
              title: 'Security',
              url: '/settings/security',
            },
            {
              title: 'Notifications',
              url: '/settings/notifications',
            },
          ],
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          title: 'Help',
          url: '/help',
          icon: HelpCircle,
        },
      ],
    },
  ],
}
</script>


# AppSidebar Component

A reusable, configurable sidebar component with collapsible menu items and nested navigation.

## Features

- 🎯 **Configurable** - Define menu structure via config object
- 📱 **Collapsible** - Supports icon, offcanvas, and none modes
- 🔗 **Vue Router Integration** - Works seamlessly with Vue Router
- 🎨 **Nested Menus** - Support for sub-items with collapsible groups
- 🎭 **Icon Support** - Uses lucide-vue-next icons
- 🎪 **Slots** - Customizable header and footer via slots
- ⚡ **Type-safe** - Full TypeScript support

## Example Usage

```vue
<template>
  <SidebarProvider>
    <AppSidebar :config="sidebarConfig" :current-path="$route.path">
      <template #header>
        <div class="p-4">
          <h2>My App</h2>
        </div>
      </template>

      <template #footer>
        <div class="p-4">
          <UserProfile />
        </div>
      </template>
    </AppSidebar>

    <SidebarInset>
      <header>
        <SidebarTrigger />
        <h1>{{ $route.meta?.title }}</h1>
      </header>
      <RouterView />
    </SidebarInset>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { Home, Settings, Users } from 'lucide-vue-next'
import { AppSidebar, type AppSidebarConfig } from '@brink-components/component-library'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@brink-components/component-library'

const sidebarConfig: AppSidebarConfig = {
  title: 'My Application',
  collapsible: 'icon',
  menuGroups: [
    {
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: Home,
        },
      ],
    },
    {
      title: 'Main',
      items: [
        {
          title: 'Users',
          url: '/users',
          icon: Users,
          items: [
            { title: 'All Users', url: '/users/all' },
            { title: 'Admins', url: '/users/admins' },
          ],
        },
        {
          title: 'Settings',
          url: '/settings',
          icon: Settings,
        },
      ],
    },
  ],
}
</script>
```

## Configuration

### AppSidebarConfig

```typescript
interface AppSidebarConfig {
  title?: string
  menuGroups: MenuItemGroup[]
  collapsible?: 'icon' | 'offcanvas' | 'none'
}

interface MenuItemGroup {
  title?: string
  items: MenuItem[]
}

interface MenuItem {
  title: string
  url: string
  icon?: Component
  isActive?: boolean
  disabled?: boolean
  items?: MenuItem[] // Nested sub-items
}
```

## Example Configuration

<div >

```typescript
const sidebarConfig: AppSidebarConfig = {
  title: 'My Application',
  collapsible: 'icon',
  menuGroups: [
    {
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: Home,
          isActive: true,
        },
      ],
    },
    {
      title: 'Main',
      items: [
        {
          title: 'Users',
          url: '/users',
          icon: Users,
          items: [
            { title: 'All Users', url: '/users/all' },
            { title: 'Admins', url: '/users/admins' },
            { title: 'User Groups', url: '/users/groups' },
          ],
        },
        {
          title: 'Settings',
          url: '/settings',
          icon: Settings,
          items: [
            { title: 'General', url: '/settings/general' },
            { title: 'Security', url: '/settings/security' },
          ],
        },
      ],
    },
  ],
}
```

</div>

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `config` | `AppSidebarConfig` | **required** | Sidebar configuration object |
| `currentPath` | `string` | `''` | Current route path for active state |

## Slots

| Slot | Description |
|------|-------------|
| `header` | Custom header content (overrides default title) |
| `footer` | Footer content (e.g., user profile, logout button) |

## Collapsible Modes

- **`icon`** - Collapses to show only icons
- **`offcanvas`** - Slides in/out from the side
- **`none`** - Always visible, no collapse

