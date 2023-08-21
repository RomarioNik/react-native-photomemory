import React, { useEffect, useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/config";
// components
import ButtonIcon from "../Buttons/ButtonIcon";
// icons
import IconPlus from "../Icons/IconPlus/IconPlus";

const Avatar = ({ style, getAvatarUrl, avatarSourse, ...props }) => {
  const [avatar, setAvatar] = useState(avatarSourse || null);

  const addAvatar = async () => {
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!image.canceled) {
      const { uri } = image.assets[0];
      setAvatar(uri);
      const fileName = uri.split("/").pop();

      const httpAvatarPath = await uploadAvatarToServer(uri, fileName);
      getAvatarUrl(httpAvatarPath);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        // alert(
        //   "Please grant camera roll permissions inside your system's settings"
        // );
        console.log("Permission to access location was denied");
      }
    })();
  }, []);

  const uploadAvatarToServer = async (uri, fileName) => {
    const fetchResponse = await fetch(uri);
    const theBlob = await fetchResponse.blob();
    const mountainImagesRef = ref(storage, `useravatars/${fileName}`);

    await uploadBytesResumable(mountainImagesRef, theBlob);
    // const downloadURL = await getDownloadURL(mountainImagesRef);
    return await getDownloadURL(mountainImagesRef);

    // return downloadURL;
  };

  return (
    <View style={[styles.avatar, style]} {...props}>
      {avatar && (
        <ImageBackground
          style={styles.ava}
          resizeMode="cover"
          source={{ uri: avatar }}
        ></ImageBackground>
      )}

      <ButtonIcon
        onPress={addAvatar}
        style={[
          styles.btnAvatar,
          { borderColor: avatar ? "#BDBDBD" : "#FF6C00" },
          { backgroundColor: avatar ? "#ffffff" : "transparent" },
          { transform: [{ rotate: avatar ? "45deg" : "0deg" }] },
        ]}
      >
        <IconPlus
          style={[styles.iconPlus, { stroke: avatar ? "#BDBDBD" : "#FF6C00" }]}
          width={14}
          height={14}
        />
      </ButtonIcon>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  ava: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    overflow: "hidden",
  },
  btnAvatar: {
    position: "absolute",
    bottom: 16,
    // right: "-50%",
    right: -12,
    // transform: [{ translateX: -47 }],
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#FF6C00",
    backgroundColor: "transparent",
  },
  iconPlus: {
    // stroke: "#FF6C00",
    // fill: "#ffffff",
  },
});

export default Avatar;
