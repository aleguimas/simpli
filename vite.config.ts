import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      // Local dev only: proxy Sanity queries so the browser CORS block on
      // localhost is bypassed (the Origin header is stripped server-side).
      "/__sanity": {
        target: "https://olcfi9tu.apicdn.sanity.io",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/__sanity/, ""),
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.removeHeader("origin");
            proxyReq.removeHeader("referer");
          });
        },
      },
    },
  },
  plugins: [dyadComponentTagger(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
