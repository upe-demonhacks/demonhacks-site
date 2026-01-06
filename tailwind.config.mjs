/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#5B9FE3', // Retro blue from Figma
				'primary-dark': '#4A8DD4',
				orange: '#FF6B1A', // CTA orange from Figma
				'orange-dark': '#E65A0A',
			},
			fontFamily: {
				'retro': ['"Press Start 2P"', 'cursive'],
			},
		},
	},
	plugins: [],
}

