import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "vue-router/auto-routes";
import App from "./App.vue";
import "./src/index.css";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      dataTable: {
        loading: 'Loading...',
        noEntriesFound: 'No entries found',
        expandedContent: 'Expanded content for ID: {id}',
        elementsSelected: '{count} of {total} selected',
        totalElements: '{total} total elements',
        manageTranslations: 'Manage translations',
      }
    }
  }
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(i18n);
app.use(router);

app.mount("#app");
