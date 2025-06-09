import globals from "globals";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
		languageOptions: {
			globals: globals.browser,
			parser: tseslint.parser,
			parserOptions: {
				sourceType: "module",
			},
		},
		extends: ["eslint:recommended", ...tseslint.configs.recommended.extends],
	},
	{
		files: ["**/*.astro"],
		plugins: { astro },
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: tseslint.parser,
				extraFileExtensions: [".astro"],
				sourceType: "module",
			},
			globals: globals.browser,
		},
		processor: astro.processors[".astro"],
		rules: {
			"no-undef": "off",
			"no-unused-vars": "off",
		},
	},
	{
		"extends": [
			"some-other-configs",
			"plugin:prettier/recommended"
		]
	},
	globalIgnores(['.vercel/']),
]);