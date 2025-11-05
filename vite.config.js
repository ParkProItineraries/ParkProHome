import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
  build: {
    // Reduce preload warnings by being more selective about what gets preloaded
    modulePreload: {
      polyfill: false, // Don't polyfill module preload
    },
    rollupOptions: {
      output: {
        // Optimize chunk splitting to reduce unnecessary preloads
        manualChunks: {
          // Core vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          'icons': ['lucide-react'],
          // UI components that are used everywhere
          'common-ui': [
            './src/components/Navbar.jsx',
            './src/components/Footer.jsx',
            './src/design/index.js',
          ],
        },
      },
    },
  },
})
