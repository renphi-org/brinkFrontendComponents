<script setup lang="ts">
import { Search, X } from 'lucide-vue-next'
import { computed, onMounted } from 'vue'
import { useComponentTranslation } from '@/composables/useComponentTranslation'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from './ui/input-group'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<Props>(), {
  showClearButton: true,
})

const emit = defineEmits<{ onSubmit: [value: string], onClear: [value: string] }>()
const t = useComponentTranslation()
const defaultPlaceholder = computed(() => props.placeholder ?? t('input.search.placeholder', 'Search...'))

interface Props {
  showClearButton?: boolean
  placeholder?: string
}

const modelSubmit = defineModel<string>('modelSubmit', { default: '' })
const model = defineModel<string>('')

const hasValue = computed(() => !!model.value && model.value.length > 0)

onMounted(() => {
  if (modelSubmit.value) {
    model.value = modelSubmit.value
  }
})
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
      :placeholder="defaultPlaceholder"
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
