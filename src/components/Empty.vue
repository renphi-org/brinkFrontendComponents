<script setup lang="ts">
import { Frown } from 'lucide-vue-next'

// Simple translation
function t(key: string) {
  const translations: Record<string, string> = {
    'common.noValues': 'No values',
  }
  return translations[key] || key
}
</script>

<template>
  <div class="text-muted-foreground py-4 flex gap-2 items-center text-sm">
    <Frown :size="16" />
    <span>
      <slot>{{ t('common.noValues') }}</slot></span>
  </div>
</template>
