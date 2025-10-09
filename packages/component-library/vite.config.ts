import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
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
