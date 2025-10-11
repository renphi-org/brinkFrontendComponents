<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Plus, X } from 'lucide-vue-next'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import ButtonSelect from './ButtonSelect.vue'
import DisplayGraduated from './DisplayGraduated.vue'
import Button from './ui/button/Button.vue'
import Input from './ui/input/Input.vue'

export interface ValueGraduated { from: number, value: number }
const props = defineProps<{
  class?: HTMLAttributes['class']
  placeholder?: string | ValueGraduated[]
}>()

// Simple translations
const t = (key: string) => {
  const translations: Record<string, string> = {
    'common.from': 'From',
    'common.value': 'Value',
    'common.add': 'Add',
  }
  return translations[key] || key
}

const isString = (val: any): val is string => typeof val === 'string'
const model = defineModel<ValueGraduated[]>({ default: () => [] })
const add = () => model.value?.push({ from: 0, value: 0 })
const remove = (index: number) => model.value.splice(index, 1)
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <ButtonSelect :class="props.class" variant="outline">
        <DisplayGraduated v-if="model.length" :value="model" />
        <template v-else-if="placeholder">
          <span v-if="isString(placeholder)" />
          <DisplayGraduated v-else :value="placeholder" class="text-muted-foreground" />
        </template>
      </ButtonSelect>
    </PopoverTrigger>
    <PopoverContent class="w-80 flex flex-col gap-2 min-w-[var(--reka-popper-anchor-width)]" align="end">
      <div v-for="(_, index) in model" :key="index" class="flex gap-2 items-center">
        <label class="text-xs">{{ t("common.from") }}:</label>
        <Input v-model="model[index].from" type="number" />
        <label class="text-xs">{{ t("common.value") }}:</label>
        <Input v-model="model[index].value" type="number" />
        <Button variant="ghost" size="sm" class="px-1" @click="remove(index)">
          <X />
        </Button>
      </div>
      <Button size="sm" variant="ghost" class="!justify-start -mx-2" @click="add()">
        <Plus />
        {{ t("common.add") }}
      </Button>
    </PopoverContent>
  </Popover>
</template>
