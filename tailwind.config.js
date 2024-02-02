/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: [
		"./src/**/*.{html,js}",
		"./pages/**/*.{html,js}",
		"./components/**/*.{html,js}",
	],
	theme: {
		extend: {
			colors: {
				body: "#0a0a0a",
			},
		},
		screens: {
			xs: "320px",
			...defaultTheme.screens,
		},
	},
	plugins: [],
};
