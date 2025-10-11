import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import path from "node:path";
import Markdown from "unplugin-vue-markdown/vite";

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({}),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ],
  server: {
    port: 3002,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: {
        index: "src/index.ts",
      },
      name: "BrinkComponentLibrary",
      fileName: () => `index.js`,
      formats: ["es"],
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ["vue", "reka-ui"],
      output: {
        globals: {
          vue: "Vue",
          "reka-ui": "RekaUI",
        },
        assetFileNames: 'style.css',
      },
    },
  },
});
