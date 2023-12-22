import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const Messages: React.FC = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>Messages</Text>
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

export default Messages;