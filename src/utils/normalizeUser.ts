import type { SupabaseUser, User } from "../types/user.model"; 





export const normalizeUser = (supabaseUser: SupabaseUser) => {

    let user: User = {
        id: supabaseUser.id,
        email: supabaseUser.email,
        firstName: supabaseUser.user_metadata.firstName,
        lastName: supabaseUser.user_metadata.lastName,
        emailVerified: supabaseUser.user_metadata.email_verified,
        authProvider: supabaseUser.app_metadata.provider,
        createdAt: supabaseUser.created_at,
        updatedAt: supabaseUser.updated_at,
        lastSignInAt: supabaseUser.last_sign_in_at
    }

    return user
}