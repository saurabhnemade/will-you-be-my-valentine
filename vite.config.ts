import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Dopamine-will-you-be-my-valentine",
  plugins: [react()],
});
