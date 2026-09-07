export interface Booking {
    id?: string

    userId: string
    userEmail: string

    hotelId: string
    hotelName: string
    hotelCoverImage: string

    roomId: string
    roomType: string

    startDate: string
    endDate: string
    numberOfNights: number

    numberOfAdults: number
    numberOfChildren: number
    numberOfRooms: number

    pricePerNight: number
    totalPrice: number
    currency: string

    status: BookingStatus
    paymentStatus: PaymentStatus

    createdAt: string
    updatedAt: string
}


type BookingStatus = | "pending" | "confirmed" | "cancelled" | "completed";

type PaymentStatus = | "unpaid" | "paid" | "refunded";
