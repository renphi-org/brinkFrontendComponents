<script setup lang="ts">
import { ArrowDown, ArrowUp, ArrowUpDown, ChevronsUpDown, EyeOff } from 'lucide-vue-next'
import { computed } from 'vue'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useComponentTranslation } from '@/composables/useComponentTranslation'
import { cn } from '@/lib/utils'

interface Props {
  title: string
  sortable?: boolean
  sortOrder?: 'asc' | 'desc' | undefined
  hideable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  sortable: false,
  hideable: true,
})

const emit = defineEmits<{
  sort: [order: 'asc' | 'desc' | undefined]
  hide: []
}>()

const t = useComponentTranslation()

const sortIcon = computed(() => {
  if (!props.sortOrder)
    return ChevronsUpDown
  return props.sortOrder === 'asc' ? ArrowUp : ArrowDown
})

function handleSort(order: 'asc' | 'desc' | undefined) {
  emit('sort', order)
}

function handleHide() {
  emit('hide')
}
</script>

<template>
  <div v-if="!sortable && !hideable" :class="cn('flex items-center font-normal text-xs space-x-2')">
    <span>{{ title }}</span>
  </div>

  <div v-else :class="cn('flex items-center space-x-2')">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button
          variant="ghost" size="sm"
          class="-ml-3 h-8 data-[state=open]:bg-accent text-muted-foreground text-xs font-normal"
        >
          <span>{{ title }}</span>
          <component :is="sortIcon" v-if="sortable" class="ml-2 !h-3.5 !w-3.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <template v-if="sortable">
          <DropdownMenuItem @click="handleSort('asc')">
            <ArrowUp class="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            {{ t('datatable.sort.asc', 'Asc') }}
          </DropdownMenuItem>
          <DropdownMenuItem @click="handleSort('desc')">
            <ArrowDown class="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            {{ t('datatable.sort.desc', 'Desc') }}
          </DropdownMenuItem>
          <DropdownMenuItem v-if="sortOrder" @click="handleSort(undefined)">
            <ArrowUpDown class="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            {{ t('datatable.sort.clear', 'Clear sort') }}
          </DropdownMenuItem>
        </template>
        <DropdownMenuSeparator v-if="sortable && hideable" />
        <DropdownMenuItem v-if="hideable" @click="handleHide">
          <EyeOff class="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          {{ t('datatable.hide', 'Hide') }}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
