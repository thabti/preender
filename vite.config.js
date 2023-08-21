import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePrerender from 'vite-plugin-prerender'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    vitePrerender({
      // Required - The path to the vite-outputted app to prerender.
      staticDir: path.join(__dirname, 'dist'),
      // Required - Routes to render.
      routes: ['/'],
    }),
  ],
})
