import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
// https://vite.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src/"),
            "@components": path.resolve(__dirname, "./src/components/"),
            "@handlers": path.resolve(__dirname, "./src/handlers/"),
            "@hooks": path.resolve(__dirname, "./src/hooks/"),
            "@interfaces": path.resolve(__dirname, "./src/interfaces/"),
            "@services": path.resolve(__dirname, "./src/services/"),
            "@store": path.resolve(__dirname, "./src/store/"),
            "@styles": path.resolve(__dirname, "./src/styles/"),
            "@pages": path.resolve(__dirname, "./src/pages/"),
            "@utils": path.resolve(__dirname, "./src/utils/"),
        },
    },
});
