import type { Hotel } from "../../../types/hotel.model"; 






export interface HotelState {
    loading: boolean,
    error: null | string,
    hotels: Hotel[],
    selectedHotel: Hotel | null
}


export const hotelInitialState: HotelState = {
    loading: false,
    error: null,
    hotels: [],
    selectedHotel: null
}
