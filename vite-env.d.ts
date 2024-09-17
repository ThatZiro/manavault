// vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string; // Add your custom env variables here
  // Add more variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
