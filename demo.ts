import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'
import './src/index.css'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      dataTable: {
        rowsPerPage: 'Rows per page',
        pageOf: 'Page {page} of {pageCount}',
        loading: 'Loading...',
        noEntriesFound: 'Empty',
        noEntriesFoundDescription: 'No entries found',
        expandedContent: 'Expanded content for ID: {id}',
        elementsSelected: '{count} of {total} selected',
        totalElements: '{total} total elements',
        manageTranslations: 'Manage translations',
      },
      common: {
        elementCountSelected: '{count}  selected',
      },
    },
  },
})

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(i18n)
app.use(router)

app.mount('#app')
