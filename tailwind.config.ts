import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			boxShadow: {
				"custom-light": "0 2px 4px rgba(0, 0, 0, 0.1)", // Light shadow
				"custom-dark":
					" rgba(0, 0, 0, 0.15) 0 0 1px, rgba(0, 0, 0, 0.15) 0 0 2px",
			},
		},
	},
	plugins: [],
} satisfies Config;
