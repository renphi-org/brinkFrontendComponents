<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useComponentTranslation } from '@/composables/useComponentTranslation'
import { cn } from '@/lib/utils'
import { ArrowDown, ArrowUp, ArrowUpDown, ChevronsUpDown, EyeOff, ListFilter } from 'lucide-vue-next'
import type { Component } from 'vue'
import { computed, ref, watch } from 'vue'
import type { FilterOption } from '.'

interface Props {
  title: string
  sortable?: boolean
  sortOrder?: 'asc' | 'desc' | undefined
  hideable?: boolean
  filter?: (() => FilterOption[] | Promise<FilterOption[]>) | Component
  filterValue?: (string | number)[] | any
}

const props = withDefaults(defineProps<Props>(), {
  sortable: false,
  hideable: true,
})

const emit = defineEmits<{
  sort: [order: 'asc' | 'desc' | undefined]
  hide: []
  'update:filterValue': [value: (string | number)[] | any]
}>()

const t = useComponentTranslation()

const sortIcon = computed(() => {
  if (!props.sortOrder) return ChevronsUpDown
  return props.sortOrder === 'asc' ? ArrowUp : ArrowDown
})

function handleSort(order: 'asc' | 'desc' | undefined) {
  emit('sort', order)
}

function handleHide() {
  emit('hide')
}

// Filter state
const isFilterOpen = ref(false)
const options = ref<FilterOption[]>([])
const optionsSearch = ref('')
const loadingOptions = ref(false)

const isCallbackFilter = computed(
  () => props.filter && typeof props.filter === 'function' && !('__vccOpts' in (props.filter as any)),
)

const filteredOptions = computed(() =>
  optionsSearch.value
    ? options.value.filter((o) =>
        String(o.label ?? o.value)
          .toLowerCase()
          .includes(optionsSearch.value.toLowerCase()),
      )
    : options.value,
)

const localFilterValue = computed({
  get: () => props.filterValue,
  set: (val) => emit('update:filterValue', val),
})

watch(isFilterOpen, async (open) => {
  if (open && isCallbackFilter.value) {
    loadingOptions.value = true
    options.value = await (props.filter as () => FilterOption[] | Promise<FilterOption[]>)()
    loadingOptions.value = false
  }
})

function toggleOption(value: string | number) {
  const current = (props.filterValue as (string | number)[]) ?? []
  if (current.includes(value)) {
    emit(
      'update:filterValue',
      current.filter((v) => v !== value),
    )
  } else {
    emit('update:filterValue', [...current, value])
  }
}

const hasActiveFilter = computed(() => {
  const val = props.filterValue
  if (!val) return false
  if (Array.isArray(val)) return val.length > 0
  return true
})
</script>

<template>
  <div :class="cn('group/colheader flex items-center gap-0.5')">
    <!-- Sort / hide dropdown -->
    <div v-if="!sortable && !hideable" :class="cn('flex items-center font-normal text-xs')">
      <span>{{ title }}</span>
    </div>
    <DropdownMenu v-else>
      <DropdownMenuTrigger as-child>
        <Button
          variant="ghost" size="sm"
          class="-ml-3 h-8 data-[state=open]:bg-accent text-muted-foreground text-xs font-normal"
        >
          <span>{{ title }}</span>
          <component :is="sortIcon" v-if="sortable" class="ml-2 h-3.5! w-3.5!" />
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

    <!-- Filter popover -->
    <Popover v-if="filter" v-model:open="isFilterOpen">
      <PopoverTrigger as-child>
        <Button
          size="sm"
          variant="ghost"
          class="relative h-7 p-0 shrink-0"
          :class="[
            hasActiveFilter ? 'w-auto px-1.5 text-primary' : 'w-7 text-muted-foreground/40 opacity-0 group-hover/colheader:opacity-100'
          ]"
        >
          <ListFilter class="h-3.5! w-3.5!" />
          <span
            v-if="hasActiveFilter && Array.isArray(filterValue) && filterValue.length > 0"
            class="ml-1 text-xs font-medium tabular-nums"
          >{{ filterValue.length }}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-64 p-2" align="start" @click.stop>
        <!-- Callback-based options filter -->
        <template v-if="isCallbackFilter">
          <Input
            v-model="optionsSearch"
            :placeholder="t('datatable.filter.search', 'Search...')"
            class="h-8 mb-2"
          />
          <div class="max-h-52 overflow-y-auto space-y-0.5">
            <div
              v-if="loadingOptions"
              class="text-center text-xs text-muted-foreground py-4"
            >
              {{ t('datatable.filter.loading', 'Loading...') }}
            </div>
            <div
              v-for="option in filteredOptions"
              :key="option.value"
              class="flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer hover:bg-accent select-none"
              @click="toggleOption(option.value)"
            >
              <Checkbox
                :model-value="(filterValue as (string | number)[])?.includes(option.value) ?? false"
                class="pointer-events-none"
              />
              <span class="text-sm">{{ option.label ?? option.value }}</span>
            </div>
            <div v-if="!loadingOptions && filteredOptions.length === 0" class="text-center text-xs text-muted-foreground py-4">
              {{ t('datatable.filter.empty', 'No options') }}
            </div>
          </div>
          <div v-if="hasActiveFilter" class="border-t mt-2 pt-2">
            <Button
              variant="ghost"
              size="sm"
              class="h-7 w-full text-xs"
              @click="emit('update:filterValue', [])"
            >
              {{ t('datatable.filter.clear', 'Clear filter') }}
            </Button>
          </div>
        </template>

        <!-- Custom component filter -->
        <template v-else>
          <component :is="filter as Component" v-model="localFilterValue" />
        </template>
      </PopoverContent>
    </Popover>
  </div>
</template>
