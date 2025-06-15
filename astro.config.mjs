import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'
import { VitePWA } from '@vite-pwa/astro';

export default defineConfig({
    site: 'https://qronexstudios.com/',
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
    defaultLocale: 'en',
    integrations: [
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
            manifest: {
                name: 'Up To Infinity Incremental',
                start_url: '/',
                display: 'standalone',
                icons: [
                    {
                        src: '/image/icon.ico',
                        type: 'image/ico',
                    },
                    {
                        src: '/image/inactive-icon.ico',
                        type: 'image/ico',
                    },
                ],
            },
        })
    ],
})
