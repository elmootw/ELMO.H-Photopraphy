import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ELMO.H-Photopraphy/',
  publicDir: 'public',
  server: {
    fs: {
      allow: ['..']
    }
  }
})
