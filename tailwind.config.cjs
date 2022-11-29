/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				DarkBlue: 'hsl(217, 28%, 15%)',
				DarkBlue1: 'hsl(218, 28%, 13%)',
				DarkBlue2: 'hsl(216, 53%, 9%)',
				DarkBlue3: 'hsl(219, 30%, 18%)',
				AccentCyan: ' hsl(176, 68%, 64%)',
				AccentBlue: ' hsl(198, 60%, 50%)',
				LightRed: 'hsl(0, 100%, 63%)',
				White: 'hsl(0, 0%, 100%)',
			},
			fontFamily: {
				sans: ['Raleway', 'sans-serif'],
				opensans: ['Open Sans', 'sans-serif'],
			},
			backgroundImage: (theme) => ({
				'logo-dark-mode': "url('assets/logo-dark-mode.svg')",
				'logo-light-mode': "url('assets/logo-light-mode.svg')",
				'curvy-dark-mode': "url('assets/bg-curvy-dark-mode.svg')",
				'curvy-light-mode': "url('assets/bg-curvy-light-mode.svg')",
			}),
		},
	},
	variants: {
		extend: {
			backgroundImage: ['dark'],
		},
	},
	plugins: [],
};
