import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Ava-ts',
  server:{
    proxy: {
      '/api': 'https://harf.roshan-ai.ir',
      
    },
  }
})
