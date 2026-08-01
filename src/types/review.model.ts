// export interface Review {
//     id: string;
//     createdAt: string;

//     userId: string;
//     userName: string;

//     hotelId: string;
//     hotelName: string;

//     rating: Rating;

//     reviewTitle: string;
//     reviewContent: string;

//     isVisible: boolean;
//     verifiedStay: boolean;
// }


export interface Review {
    id: string;
    created_at: string;
    user_id: string;
    user_name: string;
    hotel_id: string;
    hotel_name: string;
    rating: number;
    review_title: string;
    review_content: string;
    is_visible: boolean;
    verified_stay: boolean;
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
