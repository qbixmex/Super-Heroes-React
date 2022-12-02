/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 4000 },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup.ts'],
  },
});
