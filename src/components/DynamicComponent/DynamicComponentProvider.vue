<script lang="ts" setup>
import { useDynamicComponent } from '.'

const { close, visible, instances } = useDynamicComponent()
</script>

<template>
  <component
    :is="instance.component" v-for="instance in instances" :key="instance.key"
    :open="visible[instance.key]" v-bind="instance.componentProps || {}"
    @update:open="(v:boolean) => !v && close(instance.key)"
  />
</template>
