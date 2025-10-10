/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#4F46E5', // Indigo - replace with your brand color
				'primary-dark': '#4338CA',
			},
		},
	},
	plugins: [],
}

