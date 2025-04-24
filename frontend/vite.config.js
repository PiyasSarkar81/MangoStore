import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Check if running locally or in production
// eslint-disable-next-line no-undef
const API_URL = process.env.NODE_ENV === "production"
  ? "https://mangostore-c12m.onrender.com"  // Replace with your actual Render backend URL
  : "http://localhost:5000";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": API_URL,
      "/uploads/": API_URL,
    },
  },
});
// https://vitejs.dev/config/