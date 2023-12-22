import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Rooms from '../screens/Rooms';
import Messages from '../screens/Messages';
import Calendar from '../screens/Calendar';
import Library from '../screens/Library';

const Tabs = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'rooms', title: 'Rooms', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'messages', title: 'Messages', focusedIcon: 'message', unfocusedIcon: 'message-outline' },
    { key: 'calendar', title: 'Calendar', focusedIcon: 'calendar', unfocusedIcon: 'calendar-outline' },
    { key: 'library', title: 'Library', focusedIcon: 'book', unfocusedIcon: 'book-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    rooms: Rooms,
    messages: Messages,
    calendar: Calendar,
    library: Library,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Tabs;