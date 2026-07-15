// add typescript support for environment variables.
// load the type definitions that vite provides
/// <reference types="vite/client" /> 


interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string
}


interface ImportMeta {
    readonly env: ImportMetaEnv
}
