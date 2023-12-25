import { SafeAreaView, StyleSheet } from "react-native";
import RoomList from "../components/RoomList";

import { RoomAvailabilityProps } from "../types/types";

const RoomAvailability: React.FC<RoomAvailabilityProps> = ({facilityName, rooms}) => {
    return(
        <SafeAreaView style={styles.container}>
            <RoomList facilityName={facilityName} rooms={rooms}/>
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

export default RoomAvailability;

