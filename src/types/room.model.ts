export interface Room {
    id: string,
    hotelId: string,
    hotelName: string,
    roomType: string,
    description: string,
    price: number,
    maximumGuests: number,
    numberOfRoomsAvailable: number,
    cancellationPolicy: string[],
    features: string[]
}