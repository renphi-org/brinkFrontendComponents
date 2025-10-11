<script setup lang="ts">
import type { DynamicDialogProps } from '.'
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogScrollContent,
  DialogTitle,
} from '@/components/ui/dialog'

withDefaults(defineProps<DynamicDialogProps>(), {
  title: 'Are you absolutely sure?',
  onOk: () => true,
})

const open = defineModel<boolean>('open')
</script>

<template>
  <Dialog v-model:open="open">
    <DialogScrollContent class="!max-w-max min-w-[435px]">
      <DialogHeader>
        <DialogTitle>
          <div class="[&>em]:font-normal [&>em]:!not-italic line-clamp-1" v-html="title" />
        </DialogTitle>
        <DialogDescription v-if="description">
          {{ description }}
        </DialogDescription>
      </DialogHeader>
      <slot />
    </DialogScrollContent>
  </Dialog>
</template>
