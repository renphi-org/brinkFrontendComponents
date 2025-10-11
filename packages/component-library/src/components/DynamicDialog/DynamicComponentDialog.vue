<script setup lang="ts" generic=" C extends Component">
import type { Component } from 'vue'
import type { DynamicComponenWithModelDialogProps } from '.'

import { ref } from 'vue'
import DynamicDialog from './DynamicDialog.vue'
import DynamicDrawer from './DynamicDrawer.vue'

const { dialogConfig, componentConfig } = defineProps<DynamicComponenWithModelDialogProps<C>>()
const open = defineModel<boolean>('open')

const isPending = ref<boolean>(false)

async function onOk() {
  isPending.value = true
  const isOk = await dialogConfig.onOk?.() ?? true
  if (isOk)
    open.value = false

  isPending.value = false
}
</script>

<template>
  <component :is="type === 'drawer' ? DynamicDrawer : DynamicDialog" v-bind="dialogConfig" v-model:open="open">
    <component :is="componentConfig.component" v-bind="componentConfig.componentProps" @submit-success="onOk" />
  </component>
</template>
