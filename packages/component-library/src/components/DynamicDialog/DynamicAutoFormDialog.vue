<script setup lang="ts" generic="T extends GenericObject">
import type { GenericObject } from 'vee-validate'
import type { z } from 'zod'
import type { DynamicAutoFormDialogProps } from '.'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { ref, toRaw } from 'vue'
import AutoForm from '@/components/ui/auto-form/AutoForm.vue'
import Button from '@/components/ui/button/Button.vue'
import { simplifySchema } from '@/utils'
import DynamicDialog from './DynamicDialog.vue'

const { formConfig, dialogConfig } = defineProps<DynamicAutoFormDialogProps<T>>()
const open = defineModel<boolean>('open')

const isPending = ref<boolean>(false)

async function onSubmit(values: T) {
  isPending.value = true
  try {
    const success = await formConfig.onSubmit?.(values as z.infer<typeof formConfig.schema>)
    if (success)
      open.value = false
  }
  catch {}
  isPending.value = false
}

const form = useForm({
  validationSchema: toTypedSchema(simplifySchema(formConfig.schema)),
})
if (formConfig.initialValues) {
  form.setValues(toRaw(formConfig.initialValues))
}
</script>

<template>
  <DynamicDialog v-bind="dialogConfig" v-model:open="open">
    <AutoForm
      :schema="simplifySchema(formConfig.schema)"
      :form :field-config="formConfig.fieldConfig" class="flex flex-col gap-3" @submit="(event) => onSubmit(event as T)"
    >
      <div class="mt-1">
        <Button type="submit" :disabled="isPending">
          {{ dialogConfig.okButtonText || "Submit" }}
        </Button>
      </div>
    </AutoForm>
  </DynamicDialog>
</template>
