import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Messages from "../screens/Messages";

const Stack = createStackNavigator();

const MessagesStack: React.FC = () => {
    return(
        <Stack.Navigator> 
            <Stack.Screen name="Messages" component={Messages} />
        </Stack.Navigator> 
    );
}

export default MessagesStack;