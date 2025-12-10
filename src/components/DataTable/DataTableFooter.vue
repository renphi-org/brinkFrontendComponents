<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PaginationCustom from '@/components/PaginationCustom.vue'
import { injectDataTableContext } from './useDataTableContext'

defineProps<{
  total?: number
  pageSizeOptions?: number[]
  bordered?: boolean
}>()

defineSlots<{
  bulk?: (_: { selected: any[] }) => any
}>()
const page = defineModel<number>('page')
const itemsPerPage = defineModel<number>('itemsPerPage')

const ctx = injectDataTableContext()
const { t } = useI18n()
</script>

<template>
  <div
    v-if="total && total > 0"
    class="@container sticky bottom-0 right-0 w-full gap-2 flex items-center bg-background px-0 py-3 z-10 transition-[left] duration-200 ease-linear"
    :class="{ '!px-6': !bordered }"
  >
    <div v-if="ctx.selectMode === 'multiselect' && ctx.selected.value.length > 0">
      <div class="flex gap-2 items-center min-w-0">
        <span class="text-sm mr-2 line-clamp-1 min-w-0 text-muted-foreground">
          {{ t('dataTable.elementsSelected', { count: ctx.selected.value.length, total: ctx.items.length }) }}
        </span>
        <!-- Bulk actions (if items selected) -->
        <template v-if="ctx.selected.value.length > 0">
          <slot name="bulk" :selected="ctx.selected.value" />
        </template>
      </div>
    </div>
    <div v-else-if="ctx.selected.value.length === 0 && total !== undefined">
      <span class="text-sm line-clamp-1 text-muted-foreground">{{ t('dataTable.totalElements', { total }) }}</span>
    </div>

    <!-- Pagination controls on the right -->
    <div v-if="total !== undefined" class="flex flex-1 justify-end items-center gap-4">
      <PaginationCustom
        v-if="itemsPerPage"
        v-model:page="page"
        v-model:items-per-page="itemsPerPage"
        :page-size-options="pageSizeOptions || []"
        :hide-items-per-page="ctx.selected.value.length > 0 || (pageSizeOptions && pageSizeOptions.length < 2)"
        :total="total"
        :disabled="ctx.isPending"
      />
    </div>
  </div>
</template>
