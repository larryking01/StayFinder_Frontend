import type { Room } from "../../../types/room.model";





interface RoomsState {
    loadingRooms: boolean,
    roomsError: string | null,
    rooms: Room[],
    selectedRoom: Room | null
}



export const roomsInitialState: RoomsState = {
    loadingRooms: false,
    roomsError: null, 
    rooms: [],
    selectedRoom: null
}