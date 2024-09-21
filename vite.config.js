import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Electron will use this build folder
    rollupOptions: {
      output: {
        manualChunks: () => 'react-vite-electron',
      }
    }
  },
})
