import { defineConfig } from "vitepress";
import path from "path";
import { whyframe } from "@whyframe/core";
import { whyframeVue } from "@whyframe/vue";

export default defineConfig({
  vite: {
    // @ts-ignore - Vite version mismatch between VitePress and whyframe plugins

    resolve: {
      alias: {
        "@brink-components/component-library": path.resolve(
          __dirname,
          "../packages/component-library/src/index.ts"
        ),
        "@": path.resolve(__dirname, "../packages/component-library/src"),
      },
    },
    server: {
      port: 5173,
    },
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Components", link: "/components/button" },
    ],
    sidebar: [
      {
        text: "Components",
        items: [
          { text: "Button", link: "/components/button" },
          { text: "Tag", link: "/components/tag" },
          { text: "DataTable", link: "/components/datatable" },
        ],
      },
    ],
  },
});
