import type { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { supabaseClient } from "./supabaseClient";






// get the current user session
export const getSession = async () => {
    
    const { data, error } = await supabaseClient.auth.getSession()

    if(error) {
        throw error
    }

    console.log("retrieved session = ", data.session)

    return data.session
}


// get the currently authenticated user
export const getSupabaseCurrentUser = async () => {

    const { data, error } = await supabaseClient.auth.getUser() 

    if(error) {
        throw error
    }

    console.log("retrieved user = ", data.user)

    return data.user
}


// respond to user auth state changes
export const onAuthStateChange = ( callback:(event: AuthChangeEvent, session: Session | null) => void ) => {
    console.log("auth state changed fired in useEffect on app start")
    return supabaseClient.auth.onAuthStateChange( callback )
}


