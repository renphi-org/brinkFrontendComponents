<script setup lang="ts">
defineSlots<{
  default?: any
}>()
</script>

<template>
  <tbody class="[&_[data-state=selected]]:bg-muted/50">
    <slot />
  </tbody>
</template>
