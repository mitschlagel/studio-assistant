import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const Library: React.FC = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>Library</Text>
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

export default Library;