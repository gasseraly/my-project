import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: ['5173-ilqznanbr5pxuzj74wkz3-25571dc1.manusvm.computer']
  },
  preview: {
    allowedHosts: ['4173-ilqznanbr5pxuzj74wkz3-25571dc1.manusvm.computer']
  }
})
