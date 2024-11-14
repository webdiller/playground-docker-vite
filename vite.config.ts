import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    server: {
      port: 3000,
      host: true,
      watch: {
      usePolling: env.NODE_ENV === "development" ? true : false
    }},
    preview: {
      port: 3000
    }
  }
})
