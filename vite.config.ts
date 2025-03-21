import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',  // Important: permet l'accès depuis l'extérieur du conteneur
    port: 5173,
    watch: {
      usePolling: true
    }
  }
})
