import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Library from "../screens/Library";

const Stack = createNativeStackNavigator();

const LibraryStack: React.FC = () => {
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
            <Stack.Screen name="Library" component={Library} />
        </Stack.Navigator>        
    );
}

export default LibraryStack;