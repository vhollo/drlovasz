import path from 'path';
import adapter from '@sveltejs/adapter-static'
import htmlMinifierAdaptor from "sveltekit-html-minifier"
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess({
			postcss: true
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: htmlMinifierAdaptor(adapter()),
		alias: {
			$components: path.resolve('./src/lib/components'),
			$lib: path.resolve('./src/lib'),
			$src: path.resolve('./src'),
			$stores: path.resolve('./src/stores')
		}
	}
};

export default config;
