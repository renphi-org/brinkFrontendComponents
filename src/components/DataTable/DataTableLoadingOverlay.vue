<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Spinner from '@/components/ui/spinner/Spinner.vue'

const { t } = useI18n()
</script>

<template>
  <div
    class="absolute inset-0 bg-background/80 z-10 flex items-center justify-center rounded-md"
  >
    <div class="flex flex-col items-center gap-2">
      <Spinner :size="30" class="size-8" />
      <span class="text-sm text-muted-foreground">{{ t('dataTable.loading') || 'Loading...' }}</span>
    </div>
  </div>
</template>
