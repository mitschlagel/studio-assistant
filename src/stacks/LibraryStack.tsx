import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Library from "../screens/Library";

const Stack = createStackNavigator();

const LibraryStack: React.FC = () => {
    return(
        <Stack.Navigator>   
            <Stack.Screen name="Library" component={Library} />
        </Stack.Navigator>        
    );
}

export default LibraryStack;