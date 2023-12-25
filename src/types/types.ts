export interface Room {
    id: number;
    name: string;
    available: boolean;
  }
  
export interface RoomListProps {
    facilityName: string;
    rooms: Room[];
}

export interface RoomAvailabilityProps {
  facilityName: string;
  rooms: Room[];  
}