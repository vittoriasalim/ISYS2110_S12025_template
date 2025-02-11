import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ISYS2110_S12025_template/', // Ensure this matches your repo name
});