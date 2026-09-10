// add typescript support for environment variables.
// load the type definitions that vite provides
/// <reference types="vite/client" /> 


interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string
    readonly VITE_STAYFINDER_PROJECT_URL: string 
    readonly VITE_STAYFINDER_PUBLISHABLE_KEY: string
}


interface ImportMeta {
    readonly env: ImportMetaEnv
}
