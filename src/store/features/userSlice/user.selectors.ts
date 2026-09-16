import type { Rootstate } from "../../store";






export const selectCurrentUser = (state: Rootstate) => state.user.user 

export const selectIsAuthenticating = (state: Rootstate) => state.user.loading

export const selectUserErrorState = (state: Rootstate) => state.user.error

export const selectAuthInitializedState = (state: Rootstate) => state.user.authInitialized