import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  base: "/react-portf",
  plugins: [
    react(),
    // createHtmlPlugin({
    //   minify: true, // Minify the HTML for production
    // }),
  ],
  // build: {
  //   rollupOptions: {
  //     input: "./index.html",
  //     output: {
  //       manualChunks: undefined,
  //     },
  //   },
  // },
});
