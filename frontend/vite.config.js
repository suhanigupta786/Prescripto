import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // For local development
  server: {
    port: 5173
  },

  // For Render deployment
  preview: {
    port: process.env.PORT || 4173, // use Render's port
    host: true, // allow external access
    allowedHosts: ['prescripto-frontend-llch.onrender.com'] // your Render URL
  }
})
