<script setup lang="ts">
import type { AppSidebarConfig } from './src/components/AppSidebar.types'
import { Moon, Sun } from 'lucide-vue-next'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppSidebar from './src/components/AppSidebar.vue'
import DynamicComponentProvider from './src/components/DynamicComponent/DynamicComponentProvider.vue'
import { Button } from './src/components/ui/button'
import { SidebarInset, SidebarProvider, SidebarTrigger } from './src/components/ui/sidebar'

const router = useRouter()
const route = useRoute()
const isDark = ref(false)

// Configure sidebar with routes
const sidebarConfig = computed<AppSidebarConfig>(() => {
  const allRoutes = router.getRoutes()
    .filter(route => !route.path.includes(':')) // Filter out dynamic routes
    .sort((a, b) => {
      // Put index route first
      if (a.path === '/')
        return -1
      if (b.path === '/')
        return 1
      return a.path.localeCompare(b.path)
    })

  // Map routes to menu items with icons
  const menuItems = allRoutes.map((route) => {
    return {
      title: (route.meta?.title as string) || (route.name as string) || route.path,
      url: route.path,
      isActive: route.path === '/',
    }
  })

  return {
    title: 'Brink Components',
    collapsible: 'icon',
    menuGroups: [
      {
        title: 'Components',
        items: menuItems,
      },
    ],
  }
})

// Load dark mode preference from localStorage
onMounted(() => {
  const stored = localStorage.getItem('dark-mode')
  if (stored !== null) {
    isDark.value = stored === 'true'
  }
  else {
    // Check system preference
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  // Apply to document
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  }
})

// Watch for changes and persist
watch(isDark, (newValue) => {
  localStorage.setItem('dark-mode', String(newValue))
  if (newValue) {
    document.documentElement.classList.add('dark')
  }
  else {
    document.documentElement.classList.remove('dark')
  }
})

function toggleDarkMode() {
  isDark.value = !isDark.value
}
</script>

<template>
  <div :class="isDark ? 'dark' : ''">
    <SidebarProvider>
      <AppSidebar :config="sidebarConfig" :current-path="$route.path">
        <template #header>
          <div class="flex items-center justify-between px-2 mt-4">
            <h2 class="text-md font-bold truncate">
              Brinky Components
            </h2>
            <Button variant="ghost" size="icon-sm" class="size-8" @click="toggleDarkMode">
              <component :is="isDark ? Sun : Moon" class="w-4 h-4" />
            </Button>
          </div>
        </template>
      </AppSidebar>

      <SidebarInset>
        <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger class="-ml-1" />
          <div class="flex items-center gap-2">
            <h1 class="text-lg font-semibold">
              {{ $route.meta?.title || 'Component Library' }}
            </h1>
          </div>
        </header>

        <div class="flex-1 overflow-auto max-w-4xl p-8 prose dark:prose-invert">
          <RouterView />
        </div>

        <DynamicComponentProvider />
      </SidebarInset>
    </SidebarProvider>
  </div>
</template>
