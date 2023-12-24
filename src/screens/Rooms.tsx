import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import RoomSchedule from "./RoomSchedule";
import RoomAvailability from "./RoomAvailability";

const Tab = createMaterialTopTabNavigator();





const Rooms: React.FC = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: { backgroundColor: "#1c1b1f" },
            }}
        >
            <Tab.Screen name="Availability" component={RoomAvailability} />
            <Tab.Screen name="Schedule" component={RoomSchedule} />
        </Tab.Navigator>
    );
}



export default Rooms;