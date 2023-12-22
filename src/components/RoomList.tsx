import * as React from 'react';
import { List, MD3Colors } from 'react-native-paper';

const RoomList = () => (
  <List.Section>
    <List.Subheader>Percussion Practice Rooms</List.Subheader>
    <List.Item 
        title="Rehearsal Room" 
        right={() => <List.Icon icon="circle" color='green' />} />
    <List.Item
      title="Window Room"
      right={() => <List.Icon icon="circle" color='red' />}
    />
    <List.Item
      title="World Room"
      right={() => <List.Icon icon="circle" color='green' />}
    />
    <List.Item
      title="Drum Set Room"
      right={() => <List.Icon icon="circle" color='green' />}
    />
    <List.Item
      title="Orchestral Room"
      right={() => <List.Icon icon="circle" color='red' />}
    />
    <List.Item
      title="Marimba Room"
      right={() => <List.Icon icon="circle" color='green' />}
    />
  </List.Section>
);

export default RoomList;