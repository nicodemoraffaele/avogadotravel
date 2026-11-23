/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// Palette (referenza_colori): taupe caldo, bianco avorio, bronzo
				cream: {
					DEFAULT: '#EFE9E1',
					light: '#F8F6F2',
					dark: '#E3DACE',
				},
				beige: {
					DEFAULT: '#DDD2C4',
					light: '#E8DFD4',
					dark: '#CFC2B1',
				},
				sand: {
					DEFAULT: '#CFC2B1',
					light: '#DDD2C4',
					dark: '#B9A994',
				},
				taupe: {
					DEFAULT: '#B9A994',
					light: '#CFC2B1',
					dark: '#8F806D',
				},
				sage: {
					DEFAULT: '#9A8C7B',
					light: '#B3A695',
					dark: '#7C6F60',
				},
				forest: {
					DEFAULT: '#5C5045',
					light: '#6E6256',
					dark: '#463C33',
				},
				sky: {
					DEFAULT: '#CFC2B1',
					light: '#DDD2C4',
					dark: '#B9A994',
				},
				gold: {
					DEFAULT: '#9E7F55',
					light: '#C2A77F',
					dark: '#7B6140',
				},
				charcoal: {
					DEFAULT: '#3B342D',
					light: '#4D453D',
					dark: '#2A241F',
				},
			},
			fontFamily: {
				serif: ['Cormorant Garamond', 'Playfair Display', 'serif'],
				sans: ['Inter', 'system-ui', 'sans-serif'],
				script: ['Pinyon Script', 'cursive'],
				display: ['Pinyon Script', 'cursive'],
			},
			fontSize: {
				'display': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
				'display-sm': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
			},
			spacing: {
				'section': '6rem',
				'section-sm': '3rem',
			},
			animation: {
				'fade-in': 'fadeIn 1s ease-in-out',
				'slide-up': 'slideUp 0.8s ease-out',
				'slide-down': 'slideDown 0.8s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				slideDown: {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
		},
	},
	plugins: [],
};

module.exports = config;
