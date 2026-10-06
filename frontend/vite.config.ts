import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/leadflow-crm/' : '/',
  plugins: [react()],
  server: { port: 5173 },
  build: { rollupOptions: { output: { manualChunks: { charts: ['recharts'], react: ['react', 'react-dom'] } } } },
}));
