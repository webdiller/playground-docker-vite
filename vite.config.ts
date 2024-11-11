import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path"

const pages = {
  index: resolve(__dirname, './src/pages/index/index.html'),
  // about: resolve(__dirname, './src/about.html'),
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       ...pages
  //     },
  //   }
  // },
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  }
})
