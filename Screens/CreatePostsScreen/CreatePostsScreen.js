import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
} from "react-native";
// components
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import ButtonText from "../../components/Buttons/ButtonText";
import Input from "../../components/Input/Input";
// icons
import IconCamera from "../../components/Icons/IconCamera/IconCamera";
import IconMap from "../../components/Icons/IconMap/IconMap";
import IconTrash from "../../components/Icons/IconTrash/IconTrash";

const CreatePostsScreen = () => {
  // camera state
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [photo, setPhoto] = useState(null);
  const [photoId, setPhotoId] = useState(null);
  // input state
  const [photoName, setPhotoName] = useState("");
  const [photoNameLocation, setPhotoNameLocation] = useState("");
  // location state
  const [location, setLocation] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  const getPictureLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setLocation(coords);
  };

  const handleTakePicture = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      const { id } = await MediaLibrary.createAssetAsync(uri);
      setPhoto(uri);
      setPhotoId(id);
      getPictureLocation();
    }
  };

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const handleClearNewPhoto = () => {
    Alert.alert("Delete photo", "Are you sure?", [
      {
        text: "Cancel",
        onPress: () => {
          return;
        },
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          setPhoto(null);
          MediaLibrary.deleteAssetsAsync(photoId);
        },
      },
    ]);
  };

  const handleClickPublish = () => {
    navigation.navigate("HomeTabs", {
      photo,
      photoName,
      photoNameLocation,
      photoLocation: location,
    });
    setPhoto(null);
    setPhotoName("");
    setPhotoNameLocation("");
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <View style={styles.postPhoto}>
            <Camera style={styles.camera} type={type} ref={setCameraRef}>
              <TouchableOpacity
                style={styles.btnToggleCamera}
                onPress={toggleCameraType}
              >
                <ButtonIcon
                  style={styles.btnChoosePhoto}
                  onPress={handleTakePicture}
                >
                  <IconCamera width={24} height={24} />
                </ButtonIcon>

                {photo && (
                  <View style={styles.thumb}>
                    <Image
                      style={styles.newPhoto}
                      resizeMode="cover"
                      source={{ uri: photo }}
                    />
                  </View>
                )}
              </TouchableOpacity>
            </Camera>
          </View>
          <ButtonText
            style={styles.btnDeletePhoto}
            textStyle={styles.text}
            onPress={handleClearNewPhoto}
          >
            {photo === null ? "Create photo" : "Delete photo"}
          </ButtonText>

          <Input
            style={styles.inputName}
            placeholder="Photo name..."
            value={photoName}
            onChangeText={setPhotoName}
          />

          <View style={styles.mapWrapper}>
            <ButtonIcon
              style={styles.btnMapPin}
              onPress={() => navigation.navigate("Map")}
            >
              <IconMap stroke="#BDBDBD" width={24} height={24} />
            </ButtonIcon>
            <Input
              style={{ ...styles.inputName, ...styles.inputPlace }}
              placeholder="Place..."
              value={photoNameLocation}
              onChangeText={setPhotoNameLocation}
            />
          </View>

          <ButtonText style={styles.btnPublish} onPress={handleClickPublish}>
            Publish
          </ButtonText>
        </View>

        <View style={styles.btnTrashWrapper}>
          <ButtonIcon style={styles.btnTrash}>
            <IconTrash color="#BDBDBD" width={24} height={24} />
          </ButtonIcon>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",

    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  content: {},
  camera: {
    flex: 1,
  },
  postPhoto: {
    width: "100%",
    height: 240,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    overflow: "hidden",
  },
  btnToggleCamera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnChoosePhoto: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#ffffff",
  },
  thumb: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  newPhoto: {
    width: "100%",
    height: "100%",
  },
  btnDeletePhoto: {
    width: 100,
    height: 60,
    backgroundColor: "transparent",
  },
  text: {
    marginTop: 8,
    marginBottom: 32,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  inputName: {
    marginBottom: 16,
    paddingLeft: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    backgroundColor: "#ffffff",
  },
  inputPlace: {
    marginBottom: 32,
    paddingLeft: 24,
  },
  mapWrapper: {},
  btnMapPin: {
    position: "absolute",
    top: 12,
    zIndex: 2,
    width: 24,
    height: 24,
    backgroundColor: "transparent",
  },
  btnPublish: {
    marginBottom: 12,
  },
  btnTrashWrapper: {
    alignItems: "center",
  },
  btnTrash: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
  },
});

export default CreatePostsScreen;
