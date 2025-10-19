import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  formatters: {
    css: true,
    html: true,
    markdown: true,
  },
  ignores: [
    '**/components/ui/**',
    '**/App.vue',
    '**/AppSidebar.vue',
    '**/*.d.ts',
  ],
})
