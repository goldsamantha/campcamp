import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr"
import glsl from 'vite-plugin-glsl'

export default defineConfig({
  define: {
    global: 'window',
  },
  plugins: [
    tailwindcss(),
    glsl(),
    react(),
    svgr(),
  ],
})