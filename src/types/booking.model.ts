type BookingStatus = | "pending" | "confirmed" | "cancelled" | "completed";

type PaymentStatus = | "unpaid" | "paid" | "refunded";


export interface Booking {
    id: string;
    userId: string;
    hotelId: string;

    userEmail: string;

    hotelName: string;
    hotelCoverImage: string;
    hotelLocation: string;

    startDate: string; 
    endDate: string;

    numberOfNights: number;

    pricePerNight: number;
    totalPrice: number;
    currency: string;

    bookingStatus: BookingStatus;
    paymentStatus: PaymentStatus;

    createdAt: string;
}



