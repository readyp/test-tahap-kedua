/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLIENT_SECRET: string
  readonly VITE_CLIENT_ID: string
  readonly VITE_GRANT_TYPE: string
  readonly VITE_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
