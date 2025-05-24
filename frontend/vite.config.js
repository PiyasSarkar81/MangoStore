import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://mangostore-c12m.onrender.com",
      "/uploads/": "https://mangostore-c12m.onrender.com",
    },
  },
});
