import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
const url = process.env.HOST - URL;
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/router": {
        target: url,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/router/, ""),
      },
    },
  },
});
