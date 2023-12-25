import * as React from 'react';
import { List, MD3Colors } from 'react-native-paper';

import { RoomListProps, Room } from '../types/types';

const circleColor = "#1c1b1f"



const RoomList: React.FC<RoomListProps> = ({facilityName, rooms }) => (
  <List.Section title={facilityName} titleStyle={{fontSize: 24}}>
    {rooms.map((room: Room) => (
        <List.Item 
        key={room.id}
        title={room.name}
        titleStyle={{fontSize: 20}}
        onPress={() => console.log('Pressed')}
        right={() => <List.Icon icon={room.available ? "circle-outline" : "circle"} color={MD3Colors.primary30} />}
        left={() => <List.Icon icon="door" color={MD3Colors.primary10} />}
    />
        )
    )}
  </List.Section>
);

export default RoomList;