import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const serverUrl = env.VITE_SERVER_URL;

  return {
    plugins: [react(), svgr()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: "/",
    server: {
      proxy: serverUrl
        ? {
            "/api": {
              target: serverUrl,
              changeOrigin: true,
              secure: true,
              headers: {
                "ngrok-skip-browser-warning": "true",
              },
              rewrite: (url) => url.replace(/^\/api/, ""),
            },
          }
        : undefined,
    },
  };
});
