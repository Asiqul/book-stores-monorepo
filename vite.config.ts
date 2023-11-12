import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            // CLIENT ALIASES
            { find: '@', replacement: path.resolve(__dirname, './src/client/') },
            { find: '@components', replacement: path.resolve(__dirname, './src/client/components/') },
            { find: '@services', replacement: path.resolve(__dirname, './src/client/utils/services/') },
            { find: '@utils', replacement: path.resolve(__dirname, './src/client/utils/') },
            { find: '@public', replacement: path.resolve(__dirname, './public') },
        ],
    },
});
