<template>
  <div :class="isDark ? 'dark' : ''">
    <div class="min-h-screen bg-background text-foreground prose p-7">
      <!-- Dark Mode Toggle -->
      <div class="fixed top-4 right-4 z-50">
        <Button @click="toggleDarkMode" variant="outline" size="sm" class="gap-2">
          <component :is="isDark ? Sun : Moon" class="w-4 h-4" />
          {{ isDark ? 'Light' : 'Dark' }} Mode
        </Button>
      </div>

      <!-- Demo Content -->
      <DemoApp />

      <!-- Dynamic Component Provider -->
      <DynamicComponentProvider />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { Moon, Sun } from 'lucide-vue-next'
import { Button } from './src/components/ui/button'
import DemoApp from './DemoApp.md'
import DynamicComponentProvider from './src/components/DynamicComponent/DynamicComponentProvider.vue'

const isDark = ref(false)

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
