/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_DB_JSON: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
