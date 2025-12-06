import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const basePath =
    process.env.VITE_BASE_PATH && process.env.VITE_BASE_PATH.length > 0
      ? process.env.VITE_BASE_PATH.endsWith("/")
        ? process.env.VITE_BASE_PATH
        : `${process.env.VITE_BASE_PATH}/`
      : "/";

  return {
    // Let GitHub Actions pass the repo name so the Pages base path stays correct after renames.
    base: mode === "production" ? basePath : "/",
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
