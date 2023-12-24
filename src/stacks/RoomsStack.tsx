import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Rooms from "../screens/Rooms";

const Stack = createNativeStackNavigator();
const RoomsStack: React.FC = () => {
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
            <Stack.Screen name="Rooms" component={Rooms} />
        </Stack.Navigator> 
    );
}

export default RoomsStack;

const roomData = {
    rooms: [
        {
            name: "string",
            number: "string",
            id: 0,
            bookings: [
                {
                    user: "string",
                    data: "string",
                    startTime: "string",
                    endTime: "string",
                },
                {
                    user: "string",
                    data: "string",
                    startTime: "string",
                    endTime: "string",
                },
                {
                    user: "string",
                    data: "string",
                    startTime: "string",
                    endTime: "string",
                },
            ]
            
        },
        {
            name: "string",
            number: "string",
            id: 0,
            bookings: [
                {
                    user: "string",
                    data: "string",
                    startTime: "string",
                    endTime: "string",
                },
                {
                    user: "string",
                    data: "string",
                    startTime: "string",
                    endTime: "string",
                },
                {
                    user: "string",
                    data: "string",
                    startTime: "string",
                    endTime: "string",
                },
            ]
            
        },
        {
            name: "string",
            number: "string",
            id: 0,
            bookings: [
                {
                    user: "string",
                    data: "string",
                    startTime: "string",
                    endTime: "string",
                },
                {
                    user: "string",
                    data: "string",
                    startTime: "string",
                    endTime: "string",
                },
                {
                    user: "string",
                    data: "string",
                    startTime: "string",
                    endTime: "string",
                },
            ]
            
        },
    ]
}