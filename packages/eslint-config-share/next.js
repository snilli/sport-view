// module.exports = {
// 	extends: ['next', 'turbo', 'prettier'],
// 	rules: {
// 		'@next/next/no-html-link-for-pages': 'off',
// 		'react/jsx-key': 'off',
// 	},
// }

module.exports = {
	extends: ['next/core-web-vitals', 'turbo', 'prettier'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	parserOptions: {
		babelOptions: {
			presets: [require.resolve('next/babel')],
		},
	},
}
