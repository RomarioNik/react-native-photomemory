import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const MapScreen = () => {
  // const [location, setLocation] = useState(null);

  const {
    params: { location },
  } = useRoute();
  console.log(location);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      // let location = await Location.getCurrentPositionAsync({});
      // const coords = {
      //   latitude: location.coords.latitude,
      //   longitude: location.coords.longitude,
      // };
      // setLocation(coords);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>MapScreen</Text>
      <MapView
        style={styles.mapStyle}
        region={{
          ...location,
          // latitude: 50.00587967603915,
          // longitude: 36.27787656516526,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}
        showsUserLocation={true}
        mapType="standard"
        minZoomLevel={15}
        // onMapReady={() => console.log("Map is ready")}
        // onRegionChange={() => console.log("Region change")}
      >
        {location && (
          <Marker title="I am here" coordinate={location} description="Hello" />
        )}
      </MapView>
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
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
