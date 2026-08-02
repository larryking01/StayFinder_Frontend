export interface Review {
    id: string;
    createdAt: string;

    userId: string;
    userName: string;

    hotelId: string;
    hotelName: string;

    rating: Rating;

    reviewTitle: string;
    reviewContent: string;

    isVisible: boolean;
    verifiedStay: boolean;
}



export interface CreateReviewPayload {
    userId: string;
    userName: string;

    hotelId: string;
    hotelName: string;

    rating: Rating;

    reviewTitle: string;
    reviewContent: string;

    isVisible: boolean;
    verifiedStay: boolean;
}



type Rating = | 1 | 2 | 3 | 4 | 5 
