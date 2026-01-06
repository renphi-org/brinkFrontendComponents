<script setup lang="ts" generic=" C extends Component">
import type { Component } from 'vue'
import type { DynamicComponenWithModelDialogProps, SubmitErrors } from '.'

import { ref } from 'vue'
import { isSubmitErrors } from '.'
import DynamicDialog from './DynamicDialog.vue'

import DynamicDrawer from './DynamicDrawer.vue'

const { dialogConfig, componentConfig } = defineProps<DynamicComponenWithModelDialogProps<C>>()
const open = defineModel<boolean>('open')

const isPending = ref<boolean>(false)

const errors = ref<SubmitErrors | undefined>()

async function onOk() {
  isPending.value = true
  const result = dialogConfig.onOk ? await dialogConfig.onOk().catch((e: any) => e) : undefined
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
  <component :is="type === 'drawer' ? DynamicDrawer : DynamicDialog" v-bind="dialogConfig" v-model:open="open">
    <component :is="componentConfig.component" v-bind="componentConfig.componentProps" :errors @submit-success="onOk" />
  </component>
</template>
