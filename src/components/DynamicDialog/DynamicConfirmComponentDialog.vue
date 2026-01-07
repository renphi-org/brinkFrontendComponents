<script setup lang="ts" generic="C extends Component">
import type { Component } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'

import type { DynamicComponenWithModelDialogProps, SubmitErrors } from '.'
import { computed, ref } from 'vue'
import { useComponentTranslation } from '@/composables/useComponentTranslation'
import { isSubmitErrors } from '.'
import Button from '../ui/button/Button.vue'
import DynamicDialog from './DynamicDialog.vue'

const props = defineProps<DynamicComponenWithModelDialogProps<C> & { initialValue: ComponentProps<C>['modelValue'] }>()
const open = defineModel<boolean>('open')

const t = useComponentTranslation()
const model = ref<any>(props.initialValue)

const isPending = ref<boolean>(false)

const cancelText = computed(() => props.dialogConfig.cancelButtonText ?? t('common.cancel', 'Cancel'))
const okText = computed(() => props.dialogConfig.okButtonText ?? t('common.ok', 'Ok'))

function onCancel() {
  open.value = false
}

const errors = ref<SubmitErrors | undefined>()

async function onOk() {
  isPending.value = true
  const result = props.dialogConfig.onOk ? await props.dialogConfig.onOk(model.value).catch((e: any) => e) : undefined
  if (result === true || result === undefined) {
    open.value = false
  }
  else if (isSubmitErrors(result)) {
    errors.value = result
  }
  isPending.value = false
}
</script>

<template>
  <DynamicDialog v-bind="props.dialogConfig" v-model:open="open">
    <form @submit.prevent="onOk()">
      <component :is="props.componentConfig.component" v-bind="props.componentConfig.componentProps" v-model="model" :errors />
      <div class="pt-3 flex gap-2 justify-end">
        <Button type="button" variant="secondary" size="sm" @click="onCancel()">
          {{ cancelText }}
        </Button>
        <Button type="submit" :disabled="isPending" size="sm">
          {{ okText }}
        </Button>
      </div>
    </form>
  </DynamicDialog>
</template>
