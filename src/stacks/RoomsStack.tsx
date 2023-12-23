import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Rooms from "../screens/Rooms";

const Stack = createStackNavigator();

const RoomsStack: React.FC = () => {
    return(
        <Stack.Navigator> 
            <Stack.Screen name="Rooms" component={Rooms} />
        </Stack.Navigator> 
    );
}

export default RoomsStack;