import type { InjectionKey } from 'vue'
import { inject } from 'vue'

/**
 * Function type for translating component text
 * @param key - The translation key (e.g., 'input.range.min')
 * @param fallback - Default English text to use if no translation is provided
 * @returns The translated text or fallback
 */
export type TranslationFunction = (key: string, fallback: string) => string

/**
 * Default translation function that returns the fallback value
 */
const defaultTranslation: TranslationFunction = (_key, fallback) => fallback

/**
 * Injection key for providing a custom translation function
 * Consumers can provide their own i18n implementation using this key
 *
 * @example
 * ```ts
 * import { TranslationKey } from 'brink-components'
 * import { useI18n } from 'vue-i18n'
 *
 * // In your app setup
 * app.provide(TranslationKey, (key: string, fallback: string) => {
 *   const { t, te } = useI18n()
 *   return te(key) ? t(key) : fallback
 * })
 * ```
 */
export const TranslationKey: InjectionKey<TranslationFunction> = Symbol('brink-component-translation')

/**
 * Composable for translating component text
 * Uses injected translation function if available, otherwise returns English defaults
 *
 * @returns Translation function that accepts a key and fallback value
 *
 * @example
 * ```vue
 * <script setup>
 * const t = useComponentTranslation()
 * const label = t('input.range.min', 'Min')
 * </script>
 * ```
 */
export function useComponentTranslation(): TranslationFunction {
  const injectedTranslation = inject(TranslationKey, null)
  return injectedTranslation ?? defaultTranslation
}
