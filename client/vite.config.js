import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // hmr: true,
    // open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        // secure: true,
        // changeOrigin: true
      },
    },
  },
});
