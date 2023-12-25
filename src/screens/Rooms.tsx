import React from "react";

import RoomAvailability from "./RoomAvailability";
import { RoomAvailabilityProps } from "../types/types";




const Rooms: React.FC = () => {

    const roomData: RoomAvailabilityProps = {
        facilityName: "UNO Percussion Practice Rooms",
        rooms: [
            {
                id: 0,
                name: "Rehearsal Room",
                available: true
    
            },
            {
                id: 1,
                name: "Window Room",
                available: false
    
            },
            {
                id: 2,
                name: "World Room",
                available: false
    
            },
            {
                id: 3,
                name: "Orchestral Room",
                available: true
    
            },
            {
                id: 4,
                name: "Marimba Room",
                available: false
    
            },
            {
                id: 5,
                name: "Drum Set Room",
                available: true
    
            }
        ]
    }

    return (
            <RoomAvailability facilityName={roomData.facilityName} rooms={roomData.rooms} />
    );
}

export default Rooms;