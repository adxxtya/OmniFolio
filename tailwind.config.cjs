/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'ubuntu': ['Ubuntu', "system-ui", "sans-serif"]
			},
			colors: {
				'primary': '#FF7E33',
				'secondary': '#2F0D3F',
				'accent': '#CC66FF',
				'text': '#ECD1FA',
			},
		},

	},
	plugins: [],
}
