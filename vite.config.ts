import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // Expose to all network interfaces
    port: 5173, // Default port
    strictPort: true, // Don't try other ports if 5173 is taken
    cors: true, // Enable CORS
    hmr: {
      overlay: true
    }
  }
});
