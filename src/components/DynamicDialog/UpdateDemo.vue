<script setup lang="ts">
defineProps<{
  placeholder: string
  onUpdate?: () => void
}>()
</script>

<template>
  <div class="space-y-4">
    <input
      type="text"
      :placeholder="placeholder"
      class="w-full px-3 py-2 border rounded-md"
    >
    <button
      v-if="onUpdate"
      type="button"
      class="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90"
      @click="onUpdate"
    >
      Update Placeholder
    </button>
  </div>
</template>
