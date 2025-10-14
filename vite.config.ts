import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0', // Allow external connections
    port: 5173,
    watch: {
      usePolling: true, // Enable polling for file changes in Docker
    },
  },
})
