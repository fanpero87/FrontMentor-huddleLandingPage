module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				"huddle-mobile": "url('/public/images/bg-mobile.svg')",
				"huddle-desktop": "url('/public/images/bg-desktop.svg')",
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
	variants: {
		extend: {},
	},
	plugins: [],
};
