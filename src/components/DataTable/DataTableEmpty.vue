<script setup lang="ts">
import { Frown } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import { injectDataTableContext } from './useDataTableContext'

const ctx = injectDataTableContext()
const { t } = useI18n()
</script>

<template>
  <tr>
    <td :colspan="ctx.colNum.value">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Frown />
          </EmptyMedia>
          <EmptyTitle>{{ t('dataTable.noEntriesFound') }}</EmptyTitle>
          <EmptyDescription>{{ t('dataTable.noEntriesFoundDescription') }}</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <slot />
        </EmptyContent>
      </Empty>
    </td>
  </tr>
</template>
