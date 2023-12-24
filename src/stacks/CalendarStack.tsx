import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Calendar from "../screens/Calendar";

const Stack = createNativeStackNavigator();

const CalendarStack: React.FC = () => {
    return(
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#f2edf5',
            },
            headerTitleStyle: {
                color: '#1c1b1f'
            }
        }}> 
            <Stack.Screen name="Calendar" component={Calendar} />
        </Stack.Navigator> 
    );
}

export default CalendarStack;