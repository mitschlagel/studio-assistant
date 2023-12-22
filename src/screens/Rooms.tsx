import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const Rooms: React.FC = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>Rooms</Text>
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

export default Rooms;