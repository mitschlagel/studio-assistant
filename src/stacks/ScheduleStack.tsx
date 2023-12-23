import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Schedule from "../screens/Schedule";

const Stack = createStackNavigator();

const ScheduleStack: React.FC = () => {
    return(
        <Stack.Navigator> 
            <Stack.Screen name="Schedule" component={Schedule} />
        </Stack.Navigator> 
    );
}

export default ScheduleStack;