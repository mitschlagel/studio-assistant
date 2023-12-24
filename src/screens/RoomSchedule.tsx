import { SafeAreaView, StyleSheet, Text } from "react-native";

import { Calendar } from "react-native-big-calendar";

const events = [
    {
        title: 'Meeting',
        start: new Date(2023, 12, 23, 10, 0),
        end: new Date(2023, 12, 23, 10, 30),
    },
    {
        title: 'Coffee break',
        start: new Date(2023, 12, 23, 15, 45),
        end: new Date(2023, 12, 23, 16, 30),
    },
    {
        title: 'Meeting',
        start: new Date(2023, 12, 24, 10, 0),
        end: new Date(2023, 12, 23, 10, 30),
    },
    {
        title: 'Coffee break',
        start: new Date(2023, 12, 24, 15, 45),
        end: new Date(2023, 12, 23, 16, 30),
    },
]

const RoomSchedule: React.FC = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Calendar events={events} height={600} mode="schedule"/>
        </SafeAreaView>
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

export default RoomSchedule
