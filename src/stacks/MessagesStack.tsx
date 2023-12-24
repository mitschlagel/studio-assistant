import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Messages from "../screens/Messages";

const Stack = createNativeStackNavigator();

const MessagesStack: React.FC = () => {
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
            <Stack.Screen name="Messages" component={Messages} />
        </Stack.Navigator> 
    );
}

export default MessagesStack;