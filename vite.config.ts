import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"
import { resolve } from "node:path"

export default defineConfig({
  plugins: [
    react(),
    // Imports .svg icons as React components via the ?react suffix
    svgr(),
    // Compresses project images at build time
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
    }),
  ],
  resolve: {
    alias: {
      "@src": resolve(__dirname, "src"),
      "@assets": resolve(__dirname, "src/assets"),
      "@components": resolve(__dirname, "src/components"),
      "@pages": resolve(__dirname, "src/pages"),
      "@styles": resolve(__dirname, "src/styles"),
      "@contexts": resolve(__dirname, "src/contexts"),
      "@i18n": resolve(__dirname, "src/i18n"),
      "@utils": resolve(__dirname, "src/utils"),
      "@data": resolve(__dirname, "src/data"),
    },
  },
})
