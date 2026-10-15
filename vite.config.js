import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Относительные пути: сайт работает и на GitHub Pages (/new_portfolio/), и в корне домена
  base: './',
  plugins: [react()],
})
