<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core"
import { Check } from "lucide-vue-next"
import type { CheckboxRootEmits, CheckboxRootProps } from "reka-ui"
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<CheckboxRootEmits>()

const delegatedProps = reactiveOmit(props, "class")

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <CheckboxRoot v-bind="forwarded" :class="cn('grid place-content-center peer h-4.5 w-4.5 shrink-0 rounded-sm border-input border  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
    props.class)">
    <CheckboxIndicator class="grid place-content-center text-current">
      <slot>
        <Check class="h-3.5 w-3.5" :stroke-width="3" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
