import path from 'path'
import { withTV } from 'tailwind-variants/dist/transformer'

/** @type {import('tailwindcss').Config} */

const tailwindConfig = withTV({
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [
		require(path.join(path.dirname(require.resolve('plugin-tailwind')), 'selector')),
		require(path.join(path.dirname(require.resolve('plugin-tailwind')), 'animate')),
	],
})

export default tailwindConfig