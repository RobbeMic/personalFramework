import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/personalPortfolio/",
  plugins: [react()],
  server: {
    host: "localhost",
    port: 4000
  }
})
