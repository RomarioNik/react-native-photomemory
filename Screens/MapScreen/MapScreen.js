import React from "react";
import { StyleSheet, View, Text } from "react-native";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MapScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});

export default MapScreen;
