import type { AuthChangeEvent, Session } from "@supabase/supabase-js";
// import type { SupabaseUser } from "../../types/user.model";
import { supabaseClient } from "./supabaseClient";






// get the current user session
export const getSession = async () => {
    
    const { data, error } = await supabaseClient.auth.getSession()

    if(error) {
        throw error
    }

    return data.session
}


// get the currently authenticated user
export const getSupabaseCurrentUser = async () => {

    const { data, error } = await supabaseClient.auth.getUser() 

    if(error) {
        throw error
    }

    return data.user
}


// respond to user auth state changes
// properly type user later
// export const listenToAuthStateChanges = ( callback: (user: any | null ) => void ) => {
//     return supabaseClient.auth.onAuthStateChange((event, session) => {
//         callback(session?.user ?? null)
//     })
// }

export const onAuthStateChange = ( callback:(event: AuthChangeEvent, session: Session | null) => void ) => {
    return supabaseClient.auth.onAuthStateChange( callback )
}


