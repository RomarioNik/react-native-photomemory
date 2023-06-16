import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
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
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <View style={styles.postPhoto}>
            <ButtonIcon style={styles.btnChoosePhoto}>
              <IconCamera width={24} height={24} />
            </ButtonIcon>
          </View>
          <Text style={styles.text}>Upload photo</Text>
          <Input style={styles.inputName} placeholder="Photo name..." />

          <View style={styles.mapWrapper}>
            <ButtonIcon style={styles.btnMapPin}>
              <IconMap stroke="#BDBDBD" width={24} height={24} />
            </ButtonIcon>
            <Input
              style={{ ...styles.inputName, ...styles.inputPlace }}
              placeholder="Place..."
              disabled
            />
          </View>

          <ButtonText style={styles.btnPublish}>Publish</ButtonText>
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
  content: {
    // alignItems: ''
    // flexDirection: "column",
    // justifyContent: "space-between",
  },
  postPhoto: {
    width: "100%",
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  btnChoosePhoto: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#ffffff",
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
