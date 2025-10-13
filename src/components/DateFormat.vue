<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'
import { computed } from 'vue'

interface Props {
  /**
   * The date to format - can be a Date object, timestamp, or date string
   */
  date: Date | string | number
  /**
   * The format string to use for formatting
   * @default 'DD.MM.YYYY HH:mm'
   */
  format?: string
  /**
   * Whether to show relative time (e.g., "2 hours ago") instead of formatted date
   * @default false
   */
  relative?: boolean
  /**
   * Locale for formatting
   * @default 'de-DE'
   */
  locale?: string
}

const props = withDefaults(defineProps<Props>(), {
  format: 'DD.MM.YYYY HH:mm',
  relative: false,
  locale: 'de-DE',
})

// Simple translation fallbacks
const translations: Record<string, string> = {
  'date.daysAgo': '{count} days ago',
  'date.hoursAgo': '{count} hours ago',
  'date.minutesAgo': '{count} minutes ago',
  'date.justNow': 'Just now',
}

const t = (key: string, values?: Record<string, any>) => {
  let result = translations[key] || key
  if (values) {
    Object.entries(values).forEach(([k, v]) => {
      result = result.replace(`{${k}}`, String(v))
    })
  }
  return result
}

// Convert the date input to a Date object
const dateObj = computed(() => {
  if (props.date instanceof Date) {
    return props.date
  }
  if (typeof props.date === 'string' || typeof props.date === 'number') {
    return new Date(props.date)
  }
  return new Date()
})

// Format the date using VueUse
const formattedDate = useDateFormat(dateObj, props.format, {
  locales: props.locale,
})

// Calculate relative time if needed
const relativeTime = computed(() => {
  if (!props.relative)
    return null

  const now = new Date()
  const diff = now.getTime() - dateObj.value.getTime()
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) {
    return t('date.daysAgo', { count: days })
  }
  else if (hours > 0) {
    return t('date.hoursAgo', { count: hours })
  }
  else if (minutes > 0) {
    return t('date.minutesAgo', { count: minutes })
  }
  else {
    return t('date.justNow')
  }
})

// Display either relative time or formatted date
const displayValue = computed(() => {
  return props.relative ? relativeTime.value : formattedDate.value
})
</script>

<template>
  <time
    :datetime="dateObj.toISOString()"
    :title="props.relative ? formattedDate : undefined"
    class="whitespace-nowrap"
  >
    {{ displayValue }}
  </time>
</template>
