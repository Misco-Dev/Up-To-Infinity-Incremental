import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'http://uptoinfinityincremental.work.gd',
    image: {
        service: {
            entrypoint: "astro/assets/services/static",
        },
    },
});