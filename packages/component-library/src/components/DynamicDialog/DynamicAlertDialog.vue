<script setup lang="ts">
import type { DynamicDialogProps } from '.'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

const props = defineProps<DynamicDialogProps>()
const open = defineModel<boolean>('open')

const isPending = ref<boolean>(false)
async function onOk() {
  isPending.value = true
  const isOk: boolean = props.onOk ? await props.onOk() : true
  if (isOk)
    close()
  isPending.value = false
}
const { t } = useI18n()
</script>

<template>
  <AlertDialog v-model:open="open">
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          {{ title || t('dialog.alert.defaultTitle') }}
        </AlertDialogTitle>
        <AlertDialogDescription>
          {{ description || t('dialog.alert.defaultDescription') }}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel :disabled="isPending" @click="open = false">
          {{ t('common.cancel') }}
        </AlertDialogCancel>
        <AlertDialogAction :loading="isPending" @click="onOk()">
          {{ t('common.continue') }}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
