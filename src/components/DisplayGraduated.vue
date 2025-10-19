<script setup lang="ts">
export interface ValueGraduated {
  from: number
  value: number
}

interface Props {
  value?: ValueGraduated[]
}

defineProps<Props>()

// Simple translation
function t(key: string) {
  const translations: Record<string, string> = {
    'common.novalue': 'No value',
  }
  return translations[key] || key
}
</script>

<template>
  <div class="min-w-0 line-clamp-1 break-spaces text-left whitespace-normal space-x-1 ">
    <template v-if="value?.length">
      <span v-for="(val, index) in value" :key="index" class="bg-muted text-xs px-1 py-0.5 rounded">
        <span class=" text-muted-foreground "> ≥{{ `${val.from}:` }}</span> <span class="font-semibold">{{ val.value }}</span>
      </span>
    </template>
    <span v-else class="text-muted-foreground">
      {{ t('common.novalue') }}
    </span>
  </div>
</template>
