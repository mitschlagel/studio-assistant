import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

import RoomsStack from '../stacks/RoomsStack';
import MessagesStack from '../stacks/MessagesStack';
import CalendarStack from '../stacks/CalendarStack';
import LibraryStack from '../stacks/LibraryStack';
import { Icon } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Rooms"
      shifting={true}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Rooms"
        component={RoomsStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon 
              source={focused ? "home" : "home-outline"}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              source={focused ? "message-text" : "message-text-outline"}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              source={focused ? "calendar" : "calendar-outline"}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              source={focused ? "book" : "book-outline"}
              size={28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;