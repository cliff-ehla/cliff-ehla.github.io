import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: 'ignore',
			handleMissingId: 'ignore',
			concurrency: 5
		}
	},
	preprocess: vitePreprocess()
};

export default config;
