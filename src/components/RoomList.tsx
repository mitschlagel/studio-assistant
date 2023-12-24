import * as React from 'react';
import { List, MD3Colors } from 'react-native-paper';


const circleColor = "#1c1b1f"

const RoomList = () => (
  <List.Section title='Percussion Practice Rooms' titleStyle={{fontSize: 24}}>
    <List.Item 
        title="Rehearsal Room" 
        right={() => <List.Icon icon="circle" color={circleColor} />} />
    <List.Item
      title="Window Room"
      right={() => <List.Icon icon="circle-outline" color={circleColor} />}
    />
    <List.Item
      title="World Room"
      right={() => <List.Icon icon="circle" color={circleColor} />}
    />
    <List.Item
      title="Drum Set Room"
      right={() => <List.Icon icon="circle-outline" color={circleColor} />}
    />
    <List.Item
      title="Orchestral Room"
      right={() => <List.Icon icon="circle-outline" color={circleColor}  />}
    />
    <List.Item
      title="Marimba Room"
      right={() => <List.Icon icon="circle" color={circleColor} />}
    />
  </List.Section>
);

export default RoomList;