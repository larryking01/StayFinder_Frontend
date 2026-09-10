export interface SupabaseUser {
  id: string
  aud: string
  role: string
  email: string
  email_confirmed_at: string
  phone: string
  confirmation_sent_at: string
  confirmed_at: string
  last_sign_in_at: string

  app_metadata: {
    provider: string
    providers: string[]
  }

  user_metadata: {
    email: string
    email_verified: boolean
    firstName: string
    lastName: string
    phone_verified: boolean
    sub: string
  }

  identities: {
    identity_id: string
    id: string
    user_id: string

    identity_data: {
      email: string
      email_verified: boolean
      firstName: string
      lastName: string
      phone_verified: boolean
      sub: string
    }

    provider: string
    last_sign_in_at: string
    created_at: string
    updated_at: string
    email: string
  }[]

  created_at: string
  updated_at: string
  is_anonymous: boolean
}


export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone: string
  emailVerified: boolean
  authProvider: string
  createdAt: string
  updatedAt: string
  lastSignInAt?: string
}

export interface CreateUserPayload {
    firstName: string
    lastName: string
    email: string 
    password: string
}


export interface LoginUserPayload {
    email: string 
    password: string
}


export interface UpdateUserProfilePayload {
    firstName: string
    lastName: string
    email: string 
}
