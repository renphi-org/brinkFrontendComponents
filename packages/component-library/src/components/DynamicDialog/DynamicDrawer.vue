<script setup lang="ts">
import type { DynamicDialogProps } from '.'
import { X } from 'lucide-vue-next'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import Button from '../ui/button/Button.vue'

defineProps<DynamicDialogProps>()

const open = defineModel<boolean>('open')
</script>

<template>
  <Drawer v-model:open="open" handle-only direction="right" :dismissible="true" should-scale-background>
    <DrawerContent class="!max-w-[800px] ">
      <DrawerHeader class="!pb-0">
        <DrawerTitle class="flex items-center gap-2">
          <div class="[&>em]:font-normal [&>em]:!not-italic line-clamp-1 flex-1" v-html="title" />
          <Button variant="ghost" @click="open = false">
            <X />
          </Button>
        </DrawerTitle>
        <DrawerDescription v-if="description">
          {{ description }}
        </DrawerDescription>
      </DrawerHeader>
      <div class="px-4 flex-1 overflow-auto select-text">
        <slot />
      </div>
    </DrawerContent>
  </Drawer>
</template>
