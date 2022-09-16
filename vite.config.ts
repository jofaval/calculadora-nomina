import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

const base =
  process.env.NODE_ENV === "production" ? "/calculadora-nomina/" : "/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
    },
  },
});
