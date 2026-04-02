import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Dev-only harmless plugin (lovable-tagger এর বিকল্প)
function devLogger() {
  return {
    name: "dev-logger",
    enforce: "pre",
    configResolved(config) {
      console.log("✅ Vite is running in development mode!");
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && devLogger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
