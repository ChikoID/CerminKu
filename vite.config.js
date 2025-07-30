import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    // server: {
    //     host: "0.0.0.0",
    //     port: 5173,
    //     cors: true,
    //     hmr: {
    //         host: "192.168.1.10",
    //         protocol: "ws",
    //     },
    // },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
});
