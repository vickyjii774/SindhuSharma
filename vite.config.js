import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Forward contact form submissions to the secure backend during development
      "/api": "http://localhost:5174",
    },
  },
});
