import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"


// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "framer-motion": path.resolve(__dirname, "./node_modules/framer-motion/dist/cjs/index.js"),
      "motion-dom": path.resolve(__dirname, "./node_modules/motion-dom/dist/cjs/index.js"),
    },
  },
});
