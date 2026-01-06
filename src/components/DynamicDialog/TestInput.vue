<script setup lang="ts" generic=" C extends Component">
import type { Component } from 'vue'
import type { SubmitErrors } from '.'

import Input from '../ui/input/Input.vue'

defineProps<{ errors: SubmitErrors }>()
const model = defineModel<string>()
</script>

<template>
  <div>
    <Input v-model="model" />
    <div> {{ errors }}</div>
  </div>
</template>
