import { defineConfig } from "vitepress";
import path from "path";

export default defineConfig({
  vite: {
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
        ],
      },
    ],
  },
});
