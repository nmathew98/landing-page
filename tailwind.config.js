module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: false,
	},
	purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
	theme: {
		extend: {
			fontSize: {
				'7xl': '5rem',
				'8xl': '6rem',
				'9xl': '7rem',
			},
		},
	},
	variants: {
		mixBlendMode: ['responsive'],
		backgroundBlendMode: ['responsive'],
		isolation: ['responsive'],
	},
	plugins: [
		require('tailwindcss-blend-mode')(),
		//require('@tailwindcss/typography')
	],
};
