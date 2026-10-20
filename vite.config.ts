import adapter from '@sveltejs/adapter-static';
import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';

export default defineConfig(({mode}) => ({
    plugins: [
        sveltekit({
            adapter: adapter(),
            paths: {base: mode === 'github-pages' ? '/CS5610-Project_2' : ''},
        }),
    ],
}));