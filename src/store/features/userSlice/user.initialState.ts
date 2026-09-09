import type { User } from "../../../types/user.model"; 




interface UserState {
    user: User | null,
    loading: boolean,
    error: string | null
}



export const userInitialState: UserState = {
    user: null,
    loading: false,
    error: null
}