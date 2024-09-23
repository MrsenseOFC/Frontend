import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Agrupa dependências de node_modules em um chunk
          }
        },
      },
    },
    chunkSizeWarningLimit: 600, // Ajuste o limite de tamanho do chunk conforme necessário
  },
});
