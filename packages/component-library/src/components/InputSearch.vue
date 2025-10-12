<script setup lang="ts">
import { Search, X } from 'lucide-vue-next'
import { computed } from 'vue'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from './ui/input-group'

defineOptions({
  inheritAttrs: false,
})

interface Props {
  showClearButton?: boolean
  placeholder?: string
}

withDefaults(defineProps<Props>(), {
  showClearButton: true,
  placeholder: 'Search...',
})

const emit = defineEmits<{ onSubmit: [value: string], onClear: [value: string] }>()
const model = defineModel<string>()
const modelSubmit = defineModel<string>('modelSubmit', { default: '' })

const hasValue = computed(() => !!model.value && model.value.length > 0)

function submit() {
  modelSubmit.value = model.value || ''
  emit('onSubmit', model.value || '')
}

function clear() {
  modelSubmit.value = ''
  model.value = ''
  emit('onClear', '')
}
</script>

<template>
  <InputGroup>
    <InputGroupAddon align="inline-start">
      <Search />
    </InputGroupAddon>
    <InputGroupInput
      v-model="model"
      type="text"
      :placeholder="placeholder"
      v-bind="$attrs"
      @keydown.enter="submit"
    />
    <InputGroupAddon v-if="hasValue && showClearButton" align="inline-end">
      <InputGroupButton variant="ghost" size="icon-xs" @click="clear">
        <X />
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
</template>
