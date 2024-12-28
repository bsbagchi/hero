import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Preprocessor for Vite
	preprocess: vitePreprocess(),

	kit: {
		// Replace adapter-auto with Cloudflare adapter
		adapter: adapter(),

		// You can add additional configurations here, if necessary
	}
};

export default config;
