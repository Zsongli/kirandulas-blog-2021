import preprocess from 'svelte-preprocess';
import adapterStatic from "@sveltejs/adapter-static";
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapterStatic ({
			pages: '../kirandulas-blog-compiled',
			assets: '../kirandulas-blog-compiled',
			fallback: null
		}),
		target: '#svelte'
	}
};

export default config;
