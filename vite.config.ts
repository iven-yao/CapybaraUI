import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: "/capybaraui",
    plugins: [react()],
    server: {
        open: true
    },
    build: {
        outDir: 'build'
    },
    resolve: {
        alias: {
            src: "/src",
        }
    }
})