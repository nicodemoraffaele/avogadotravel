import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		sveltePreprocess({
			postcss: true,
		}),
	],

	kit: {
		// Sito statico per GitHub Pages. BASE_PATH = '/avogadotravel' quando il sito è
		// servito da nicodemoraffaele.github.io/avogadotravel; vuoto in locale o con dominio proprio.
		adapter: adapter({ fallback: '404.html' }),
		paths: {
			base: process.env.BASE_PATH ?? '',
		},
		alias: {
			$lib: './src/lib',
			$components: './src/components',
			$services: './src/services',
			$app: '../../node_modules/@sveltejs/kit/types',
			'$project/ui': '../ui/src/',
		},
	},
	vitePlugin: {
		inspector: {
			toggleKeyCombo: 'meta-shift',
			showToggleButton: 'never',
		},
	},
};

export default config;
