<script setup lang="ts" generic="T extends Record<string, any>">
import { useI18n } from 'vue-i18n'
import { injectDataTableContext } from './useDataTableContext'

defineProps<{
  item: T
}>()

defineSlots<{
  default?: (_: { item: T }) => any
  raw?: (_: { item: T, colNum: number }) => any
}>()

const ctx = injectDataTableContext()
const { t } = useI18n()
</script>

<template>
  <slot name="raw" :item :col-num="ctx.colNum.value">
    <tr class="hover:!bg-transparent">
      <td
        :colspan="ctx.colNum.value"
        class="bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7  [&_td]:py-0.5"
      >
        <slot :item>
          <!-- Default expanded content -->
          <div class="p-4">
            {{ t('dataTable.expandedContent', { id: item[ctx.idcol as keyof T] }) }}
          </div>
        </slot>
      </td>
    </tr>
  </slot>
</template>
