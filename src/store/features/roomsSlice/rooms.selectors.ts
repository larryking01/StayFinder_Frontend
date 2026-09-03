import type { Rootstate } from "../../store";








export const selectRooms = (state: Rootstate) => state.rooms.rooms 

export const selectChosenRoom = (state: Rootstate) => state.rooms.selectedRoom 

export const selectRoomsLoadingState = (state: Rootstate) => state.rooms.loadingRooms