/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["vitest.setup.ts"],
		exclude: ["**/node_modules/**", "**/public/**", "**/.next/**"],
	},
	resolve: {
		alias: {
			"@": path.join(__dirname, "./src"),
		},
	},
});
