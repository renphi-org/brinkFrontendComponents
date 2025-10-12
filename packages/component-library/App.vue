<template>
  <div :class="isDark ? 'dark' : ''">
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div class="flex items-center justify-between px-2">
            <h2 class="text-lg font-semibold">Brink Components</h2>
            <Button @click="toggleDarkMode" variant="ghost" size="icon-sm" class="size-8">
              <component :is="isDark ? Sun : Moon" class="w-4 h-4" />
            </Button>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Components</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem v-for="route in routes" :key="route.path">
                  <SidebarMenuButton
                    :data-active="$route.path === route.path"
                    @click="$router.push(route.path)"
                  >
                    {{ route.meta?.title || route.name }}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <SidebarInset>
        <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger class="-ml-1" />
          <div class="flex items-center gap-2">
            <h1 class="text-lg font-semibold">{{ $route.meta?.title || 'Component Library' }}</h1>
          </div>
        </header>

        <div class="flex-1 overflow-auto">
          <RouterView />
        </div>

        <DynamicComponentProvider />
      </SidebarInset>
    </SidebarProvider>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Moon, Sun } from 'lucide-vue-next'
import { Button } from './src/components/ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from './src/components/ui/sidebar'
import DynamicComponentProvider from './src/components/DynamicComponent/DynamicComponentProvider.vue'

const router = useRouter()
const isDark = ref(false)

// Get all routes for sidebar navigation
const routes = computed(() => {
  return router.getRoutes()
    .filter(route => !route.path.includes(':')) // Filter out dynamic routes
    .sort((a, b) => {
      // Put index route first
      if (a.path === '/') return -1
      if (b.path === '/') return 1
      return a.path.localeCompare(b.path)
    })
})

// Load dark mode preference from localStorage
onMounted(() => {
  const stored = localStorage.getItem('dark-mode')
  if (stored !== null) {
    isDark.value = stored === 'true'
  } else {
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
  } else {
    document.documentElement.classList.remove('dark')
  }
})

function toggleDarkMode() {
  isDark.value = !isDark.value
}
</script>
