import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
    site: 'http://uptoinfinityincremental.work.gd',
    adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
  	}),
});
