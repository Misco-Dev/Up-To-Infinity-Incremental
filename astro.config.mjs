import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'

export default defineConfig({
    site: 'https://qronexstudios.com/',
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
    defaultLocale: 'en',
})
