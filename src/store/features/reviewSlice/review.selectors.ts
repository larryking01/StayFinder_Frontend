import type { Rootstate } from "../../store"; 





export const selectReviewsLoadingState = (state: Rootstate) => state.reviews.loadingReviews 

export const selectHotelReviews = (state: Rootstate) => state.reviews.hotelReviews 

export const selectReviewsError = (state: Rootstate) => state.reviews.error

export const selectReviewsCount = (state: Rootstate) => state.reviews.hotelReviews.length