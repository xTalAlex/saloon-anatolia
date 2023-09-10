/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'display': ['Rye'],
				'cursive': ['Germania One'],
				'sans': ['Palanquin'],
			},
		}
	},
	plugins: [
		require("daisyui"),
		plugin(function({ addUtilities, theme }) {
			const neonUtilities = {};
			const colors = theme('colors');
			for (const color in colors) {
				if (typeof colors[color] == 'object' ){
					const color1= colors[color]['500'];
					const color2 = colors[color]['800'];
					neonUtilities[`.neon-${color}`] = {
						textShadow: `0 0 5px ${color1}, -6px 2px 8px ${color2}`,
						filter: `drop-shadow(-6px 2px 8px  ${color2.replace('<alpha-value>','1')})`,
					}
				}
				else{
					const color1= colors[color];
					neonUtilities[`.neon-${color}`] = {
						textShadow: `0 0 5px ${color1.replace('<alpha-value>','1')}, -6px 2px 8px ${color1.replace('<alpha-value>','0.3')}`,
						filter: `drop-shadow(-6px 2px 8px  ${color1.replace('<alpha-value>','0.3')})`,
					}
				}
			}
			addUtilities(neonUtilities);
		}),
	],
	daisyui: {
		logs: false,
		themes: [
			{
				saloon: {
					"primary": "#ffd700",
					"secondary": "#e52f1b",
					"accent": "#16a34a",
					"neutral": "#a67847",
					"base-100": "#000000",

					"--rounded-btn": "1.5rem",
					"--rounded-badge": "1.5rem",
					"--btn-text-case": "uppercase"
				},
			},
		],
	},
}
