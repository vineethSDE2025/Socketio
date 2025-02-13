import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    allowedHosts: ['*.ngrok-free.app'], // Allow any ngrok subdomain
    host: true,  // This allows requests from any host
  },
})
