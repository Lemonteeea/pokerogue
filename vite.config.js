import { defineConfig } from 'vite';
// import fs from 'vite-plugin-fs';

export default defineConfig(({ mode }) => {
	return {
		plugins: [/*fs()*/],
		server: { host: '0.0.0.0', port: 8000,
			proxy: {
				'/api': {
					target: 'https://api.pokerogue.net',
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, '')
				}
			}
		 },
		clearScreen: false,
		build: {
			minify: 'esbuild',
			sourcemap: false
		},
		esbuild: {
			pure: mode === 'production' ? [ 'console.log' ] : [],
			keepNames: true,
		},
	}
})
