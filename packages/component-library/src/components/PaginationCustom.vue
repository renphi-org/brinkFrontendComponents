<script setup lang="ts">
import type { PaginationRootEmits, PaginationRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from 'lucide-vue-next'
import { useForwardPropsEmits } from 'reka-ui'
import {
  Pagination,
  PaginationContent,
  PaginationFirst,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import SelectOptions from './SelectOptions.vue'

const props = defineProps<PaginationRootProps & {
  class?: HTMLAttributes['class']
  itemsPerPage?: number | undefined
  hideItemsPerPage?: boolean
}>()
const emits = defineEmits<PaginationRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardPropsEmits(delegatedProps, emits)
const pageSizeOptions = [25, 50, 100, 250, 500]

const itemsPerPage = defineModel<number | undefined>('itemsPerPage', { default: 25 })

// Simple translation function
const t = (key: string, values?: Record<string, any>) => {
  const translations: Record<string, string> = {
    'dataTable.rowsPerPage': 'Rows per page',
    'dataTable.pageOf': 'Page {page} of {pageCount}',
  }
  let result = translations[key] || key
  if (values) {
    Object.entries(values).forEach(([k, v]) => {
      result = result.replace(`{${k}}`, String(v))
    })
  }
  return result
}
</script>

<template>
  <div>
    <Pagination v-slot="{ page, pageCount }" v-bind="forwarded" class="flex items-center gap-4   @xl:gap-8 @4xl:gap-12">
      <div v-if="!hideItemsPerPage" class="flex items-center gap-2 min-w-0">
        <span class="text-sm text-muted-foreground hidden  truncate @xl:block">
          {{ t('dataTable.rowsPerPage') }}
        </span>
        <SelectOptions
          class="!w-auto"
          :options="pageSizeOptions.map(p => ({ value: p, label: `${p}` }))"
          :model-value="itemsPerPage"
          @update:model-value="(value) => itemsPerPage = value"
        />
      </div>
      <PaginationContent>
        <div class="text-sm truncate min-w-0 mr-2 text-muted-foreground ">
          <span class="hidden @2xl:block">{{ t('dataTable.pageOf', { page, pageCount }) }}</span>
          <span class="@2xl:hidden">{{ page }} / {{ pageCount }}</span>
        </div>
        <PaginationFirst>
          <ChevronsLeftIcon class="size-4" />
        </PaginationFirst>
        <PaginationPrevious>
          <ChevronLeftIcon />
        </PaginationPrevious>

        <PaginationNext variant="outline">
          <ChevronRightIcon />
        </PaginationNext>
        <PaginationLast variant="outline">
          <ChevronsRightIcon class="size-4" />
        </PaginationLast>
      </PaginationContent>
    </Pagination>
  </div>
</template>
