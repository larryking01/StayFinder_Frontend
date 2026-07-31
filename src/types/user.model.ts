export interface User {
    id: string;
    aud: string;
    role: string;

    email: string;
    emailConfirmedAt: string;

    phone: string;

    confirmedAt: string;
    lastSignInAt: string;

    appMetadata: AppMetadata;
    userMetadata: UserMetadata;

    identities: Identity[];

    createdAt: string;
    updatedAt: string;

    isAnonymous: boolean;
}


export interface CreateUserPayload {
    firstName: string;
    lastName: string;
    email: string;
    password: string
}


export interface AppMetadata {
    provider: string;
    providers: string[];
}


export interface UserMetadata {
    email: string;
    emailVerified: boolean;

    firstName: string;
    lastName: string;

    phoneVerified: boolean;
    sub: string;
}


export interface Identity {
    identityId: string;
    id: string;
    userId: string;

    identityData: IdentityData;

    provider: string;

    lastSignInAt: string;
    createdAt: string;
    updatedAt: string;

    email: string;
}


export interface IdentityData {
    email: string;
    emailVerified: boolean;

    firstName: string;
    lastName: string;

    phoneVerified: boolean;
    sub: string;
}