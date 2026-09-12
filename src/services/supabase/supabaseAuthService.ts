import type { AuthChangeEvent, Session } from "@supabase/supabase-js";
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
export const onAuthStateChange = ( callback:(event: AuthChangeEvent, session: Session | null) => void ) => {
    return supabaseClient.auth.onAuthStateChange( callback )
}


