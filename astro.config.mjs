import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
export default defineConfig({
    site: 'http://uptoinfinityincremental.work.gd',
    integrations: [image({
        serviceEntryPoint: '@astrojs/image/static',
    })],
    image: {
        service: {
            entrypoint: "astro/assets/services/static",
        },
    },
});