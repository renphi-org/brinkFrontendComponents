<script setup lang="ts">
import { Frown } from 'lucide-vue-next'
import { useComponentTranslation } from '@/composables/useComponentTranslation'

const t = useComponentTranslation()
</script>

<template>
  <div class="text-muted-foreground py-4 flex gap-2 items-center text-sm">
    <Frown :size="16" />
    <span>
      <slot>{{ t('common.noValues', 'No values') }}</slot></span>
  </div>
</template>
