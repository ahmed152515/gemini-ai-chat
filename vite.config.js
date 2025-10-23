import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gemini-ai-chat/', // Replace 'gemini-ai-chat' with your repository name
})
