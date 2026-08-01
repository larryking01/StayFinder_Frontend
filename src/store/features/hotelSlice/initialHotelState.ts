import type { Hotel } from "../../../types/hotel.model"; 






export interface HotelState {
    loadingHotels: boolean,
    error: null | string,
    hotels: Hotel[],
    selectedHotel: Hotel | null
}


export const hotelInitialState: HotelState = {
    loadingHotels: false,
    error: null,
    hotels: [],
    selectedHotel: null
}
