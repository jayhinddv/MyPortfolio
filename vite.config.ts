import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the output directory is set to 'dist'
  },
  // If your app is served from a subpath, set the base accordingly
  // base: '/your-subpath/',
});
