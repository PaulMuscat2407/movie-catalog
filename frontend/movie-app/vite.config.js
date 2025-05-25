import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5026',
        changeOrigin: true,
        secure: false, // required for self-signed SSL certs in .NET dev
      }
    }
  }
})
