import { SafeAreaView, StyleSheet } from "react-native";
import RoomList from "../components/RoomList";

const RoomAvailability: React.FC = () => {
    return(
        <SafeAreaView style={styles.container}>
            <RoomList/>
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