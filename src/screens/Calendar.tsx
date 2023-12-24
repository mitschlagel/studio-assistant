import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet } from "react-native";

import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

const RehearsalSchedule = () => {
  return (
    <View style={styles.container}>
      <Text>Rehearsal Schedules</Text>
    </View>
  );
}

const SemesterCalendar = () => {
    return (
      <View style={styles.container}>
        <Text>Semester Schedule</Text>
      </View>
    );
  }

function Calendar() {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: "#1c1b1f" },
        }}
      >
        <Tab.Screen name="Rehearsal" component={RehearsalSchedule} />
        <Tab.Screen name="Semester" component={SemesterCalendar} />
      </Tab.Navigator>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
  }
});

export default Calendar;