import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Tag } from './Tag.vue'

export const tagVariants = cva(
  '!text-[10px] inline-flex empty:hidden min-w-6 content-center items-center justify-center gap-1 truncate rounded  px-[5px] py-[3px] text-center text-sm leading-snug font-semibold [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        'default': 'bg-primary text-primary-foreground shadow ',
        'destructive': 'bg-destructive text-primary-foreground  ',
        'destructive-outline':
          'border border-destructive text-destructive shadow-sm ',
        'outline': 'border border-input bg-background shadow-sm ',
        'success': 'bg-emerald-500 text-background',
        'draft': 'bg-orange-400 text-background',
        'released': 'bg-emerald-500 text-background',
        'archived': 'bg-destructive text-background',

        'tag': 'border border-input bg-background shadow-sm ',
        'attribute':
          'border border-teal-600/20 text-teal-600 dark:border-teal-400/40 dark:text-teal-400 px-1 py-0.5',
        'attributetype':
          'border border-indigo-600/20 text-indigo-600 dark:border-indigo-400/40  dark:text-indigo-400 px-1 py-0.5',
        'attributeset':
          'border border-violet-600/20 text-violet-600 dark:border-violet-400/40 dark:text-violet-400 px-1 py-0.5',
        'attributesetgroup':
          'border border-cyan-600/20 text-cyan-600 dark:border-cyan-400/40 dark:text-cyan-400 px-1 py-0.5',
        'choice':
          'border border-fuchsia-600/20 text-fuchsia-600 dark:border-fuchsia-400/40 dark:text-fuchsia-400 px-1 py-0.5',
        'outputchannel':
          'border border-sky-600/20 text-sky-600 dark:border-sky-400/40 dark:text-sky-400 px-1 py-0.5',

        'unit': 'border border-input bg-background  font-mono text-muted-foreground !text-[11px]',

        'workprocess': 'bg-blue-500/20 text-foreground',
        'article': 'bg-emerald-500/20 text-foreground',
        'partlist': 'bg-emerald-500/30 text-foreground',
        'assembly': 'bg-purple-500/30 text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type TagVariants = VariantProps<typeof tagVariants>
