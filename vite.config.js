import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
        tailwindcss(),

  ],
  server: {
  host: 'localhost',
  port: 5173,
  proxy: {
  '/v1': {
    target: 'https://cloud.appwrite.io',
    changeOrigin: true,
    secure: false,
  },
}

}

})
