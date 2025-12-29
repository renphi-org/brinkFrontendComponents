<script setup lang="ts" generic="C extends Component">
import type { Component } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'

import type { DynamicComponenWithModelDialogProps } from '.'
import { ref } from 'vue'
import Button from '../ui/button/Button.vue'
import DynamicDialog from './DynamicDialog.vue'

const { dialogConfig, componentConfig, initialValue } = defineProps<DynamicComponenWithModelDialogProps<C> & { initialValue: ComponentProps<C>['modelValue'] }>()
const open = defineModel<boolean>('open')

const model = ref<any>(initialValue)

const isPending = ref<boolean>(false)

async function onOk() {
  isPending.value = true
  const isOk = await dialogConfig.onOk?.(model.value) ?? true
  if (isOk)
    open.value = false

  isPending.value = false
}
</script>

<template>
  <DynamicDialog v-bind="dialogConfig" v-model:open="open">
    <component :is="componentConfig.component" v-bind="componentConfig.componentProps" v-model="model" />
    <div class="mt-1">
      <Button type="Submit" :disabled="isPending" size="sm" @click="onOk">
        {{ dialogConfig.okButtonText || 'Ok' }}
      </Button>
    </div>
  </DynamicDialog>
</template>
