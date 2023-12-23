import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();

const RehearsalSchedule = () => {
  return (
    <View style={styles.container}>
      <Text>Rehearsal Schedules</Text>
    </View>
  );
}

const SemesterSchedule = () => {
    return (
      <View style={styles.container}>
        <Text>Semester Schedule</Text>
      </View>
    );
  }

function ScheduleTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: "#1c1b1f" },
      }}
    >
      <Tab.Screen name="Rehearsal" component={RehearsalSchedule} />
      <Tab.Screen name="Semester" component={SemesterSchedule} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: 'center',
  }
});

export default ScheduleTabs;