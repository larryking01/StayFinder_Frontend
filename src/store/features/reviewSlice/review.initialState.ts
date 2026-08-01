import type { Review } from "../../../types/review.model";





export interface ReviewState {
    loadingReviews: boolean,
    error: string | null,
    hotelReviews: Review[]
}



export const reviewInitialState: ReviewState = {
    loadingReviews: false,
    error: null,
    hotelReviews: []
}