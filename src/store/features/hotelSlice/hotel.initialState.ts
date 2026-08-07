import type { Hotel } from "../../../types/hotel.model"; 






interface HotelState {
    loadingHotels: boolean,
    error: null | string,
    hotels: Hotel[],
    selectedHotel: Hotel | null,

    appName: string   // centralized source for application name.
}


export const hotelInitialState: HotelState = {
    loadingHotels: false,
    error: null,
    hotels: [],
    selectedHotel: null,

    appName: 'Stayfinder'
}
