<script setup lang="ts" generic="C extends Component">
import type { Component } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'

import type { DynamicComponenWithModelDialogProps, SubmitErrors } from '.'
import { ref } from 'vue'
import { isSubmitErrors } from '.'
import Button from '../ui/button/Button.vue'
import DynamicDialog from './DynamicDialog.vue'

const { dialogConfig, componentConfig, initialValue } = defineProps<DynamicComponenWithModelDialogProps<C> & { initialValue: ComponentProps<C>['modelValue'] }>()
const open = defineModel<boolean>('open')

const model = ref<any>(initialValue)

const isPending = ref<boolean>(false)

function onCancel() {
  open.value = false
}

const errors = ref<SubmitErrors | undefined>()

async function onOk() {
  isPending.value = true
  const result = dialogConfig.onOk ? await dialogConfig.onOk(model.value).catch((e: any) => e) : undefined
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
  <DynamicDialog v-bind="dialogConfig" v-model:open="open">
    <form @submit.prevent="onOk()">
      <component :is="componentConfig.component" v-bind="componentConfig.componentProps" v-model="model" :errors />
      <div class="pt-3 flex gap-2 justify-end">
        <Button type="button" variant="secondary" size="sm" @click="onCancel()">
          {{ dialogConfig.cancelButtonText || 'Cancel' }}
        </Button>
        <Button type="submit" :disabled="isPending" size="sm">
          {{ dialogConfig.okButtonText || 'Ok' }}
        </Button>
      </div>
    </form>
  </DynamicDialog>
</template>
