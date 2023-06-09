import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "src/pages"),
      },
      {
        find: "@reducers",
        replacement: path.resolve(__dirname, "src/reducers"),
      },
      {
        find: "@contexts",
        replacement: path.resolve(__dirname, "src/contexts"),
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "src/utils"),
      },
    ],
  },
});
