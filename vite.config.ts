import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "markdown-loader",
      transform(code, id) {
        if (id.slice(-3) === ".md") {
          // For .md files, get the raw content
          return `export default ${JSON.stringify(code)};`;
        }
      },
    },
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(css|md)$/.test(assetInfo.name ?? "")) {
            return "assets/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash].[ext]";
        },
      },
    },
  },
});
