/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_urlRandomDadJoke: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
