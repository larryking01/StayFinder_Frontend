// configure a public axios instance to make unauthenticated/public requests to the backend
import axios from "axios";







let api_base_url = import.meta.env.VITE_API_BASE_URL


export const publicAxios = axios.create({
    baseURL: api_base_url,
    timeout: 10000
})




