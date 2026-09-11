import type { User } from "../../../types/user.model"; 




interface UserState {
    user: User | null,
    loading: boolean,
    error: string | null,
    authInitialized: boolean
}



export const userInitialState: UserState = {
    user: null,
    loading: false,
    error: null,
    authInitialized: false
}