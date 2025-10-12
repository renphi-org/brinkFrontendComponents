/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />

declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}
