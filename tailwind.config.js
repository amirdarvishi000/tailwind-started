/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/*.{html,js}"],
	darkMode: "class",
	theme: {
		fontFamily: {
			Yekan: "Yekan",
			YekanBold2: "YekanBold",
		},
		screens: {
			mobile: "542px",
			tablet: "768px",
			laptop: "1024px",
			desktop: "1280px",
		},
		extend: {
			spacing: {
				22: "5.5rem",
				sm: "6px",
				lg: "60px",
			},
			colors: {
				primary: {
					DEFAULT: "#9C27B0",
					100: "#FF5722",
					200: "#BF360C",
				},
				secondary: "#FFEB3B",
				third: "#4CAF50",
				forth: "#03A9F4",
			},
		},
	},
	plugins: [],
};
