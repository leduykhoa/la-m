import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            // input: ['resources/css/app.css', 'resources/js/app.js'],
            input: [
                'resources/css/app.css', 
                'resources/sass/app.scss', 
                'resources/js/app.js'],
            refresh: true,
        }),
    ],
    server: {
        host: '0.0.0.0',
        // port: 84,
        // open: false,
     }
});
