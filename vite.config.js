import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Personal site on USERNAME.github.io → base '/'
export default defineConfig({
  plugins: [react()],
  base: '/'
})
