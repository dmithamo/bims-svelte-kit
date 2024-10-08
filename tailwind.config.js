const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{html,svelte}'],
	theme: {
		extend: {
			fontSize: {
				base: '14px'
			},
			fontFamily: {
				sans: ['Circular Std', 'sans-serif'],
				bold: ['Circular Std Bold', 'sans-serif']
			}
			// colors: {
			// 	pDark: colors.slate['400'],
			// 	sDark: colors.slate['950'],
			// 	pLight: colors.zinc['900'],
			// 	sLight: colors.slate['50'],
			// 	aDark: colors.green['500'],
			// 	aLight: colors.emerald['500'],
			// 	danger: colors.red['500']
			// }
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['emerald', 'dark']
	}
};
