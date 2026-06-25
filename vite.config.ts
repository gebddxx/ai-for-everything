import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/ai-for-everything/' : '/',
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
}))
