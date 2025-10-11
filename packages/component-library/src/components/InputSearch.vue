<script setup lang="ts">
import { Search } from 'lucide-vue-next'
import { Input } from './ui/input'

defineOptions({
  inheritAttrs: false,
})
const emit = defineEmits<{ onSubmit: [value: string], onClear: [value: string] }>()
const model = defineModel<string>()
const modelSubmit = defineModel<string>('modelSubmit', { default: '' })
function submit() {
  modelSubmit.value = model.value || ''
  emit('onSubmit', model.value || '')
}
// function clear() {
//     modelSubmit.value = ''
//     model.value = ''
//     emit('onClear', '')
// }
</script>

<template>
  <div class="relative items-center">
    <Input
      id="search" v-model="model" type="text" placeholder="Search..." class="pl-10" v-bind="$attrs"
      @keydown.enter="submit"
    />
    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
      <Search class="size-4 text-muted-foreground" />
    </span>
  </div>
</template>
