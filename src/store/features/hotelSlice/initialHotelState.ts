import type { Hotel } from "../../../types/hotel.model"; 






export interface HotelState {
    loading: boolean,
    error: null | string,
    hotels: Hotel[]
}


export const hotelInitialState: HotelState = {
    loading: false,
    error: null,
    hotels: []
}
