<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { TagVariants } from '.'
import { cn } from '@/lib/utils'
import { tagVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: TagVariants['variant']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <span :class="cn(tagVariants({ variant }), props.class)">
    <slot />
  </span>
</template>
