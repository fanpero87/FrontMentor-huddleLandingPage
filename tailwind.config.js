/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				"huddle-mobile": "url('./images/bg-mobile.svg')",
				"huddle-desktop": "url('./images/bg-desktop.svg')",
			}),
			screens: {
				mobile: "375px",
				desktop: "1440px",
			},
			container: {
				screens: {
					mobile: "375px",
					desktop: "1440px",
				},
			},
			colors: {
				violet: "#6648B1",
				magenta: "#E882E8",
			},
			fontFamily: {
				heading: ["Poppins", "sans-serif"],
				body: ["Open Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
