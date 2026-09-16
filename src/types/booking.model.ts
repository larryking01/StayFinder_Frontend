export interface Booking {
    id?: string

    userId: string
    userEmail: string

    hotelId: string
    hotelName: string
    hotelCoverImage: string

    roomId: string
    roomType: string

    startDate: Date
    endDate: Date
    numberOfNights: number

    numberOfAdults: number
    numberOfChildren: number
    numberOfRooms: number

    pricePerNight: number
    totalPrice: number
    currency: string

    status: BookingStatus
    paymentStatus: PaymentStatus

    createdAt?: Date
    updatedAt?: Date
}


type BookingStatus = | "pending" | "confirmed" | "cancelled" | "completed";

type PaymentStatus = | "unpaid" | "paid" | "refunded";


export interface BookingFormData {
    firstName: string,
    lastName: string,
    email: string,
    countryCode: string,
    phoneNumber: string,
    cardHolderName: string,
    cardNumber: string,
    expiryDate: string,
    securityCode: string,
    specialRequests?: string,
    couponCode?: string
}
