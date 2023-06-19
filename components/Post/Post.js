import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
// components
import ButtonText from "../Buttons/ButtonText";
import ButtonIcon from "../Buttons/ButtonIcon";
// icons
import IconComments from "../Icons/IconComments/IconComments";
import IconMap from "../Icons/IconMap/IconMap";
import IconLike from "../Icons/IconLike/IconLike";

const Post = ({
  id,
  postName,
  imgSource,
  commentsCount,
  likesCount,
  fullLocation,
  country,
  colorText,
  colorIcon,
  photoLocation,
}) => {
  const navigation = useNavigation();

  const handleClickComments = () => {
    navigation.navigate("Comments");
  };

  const handleClickEditPost = () => {
    // open post to edit
  };

  // console.log("imgSource: ", imgSource);

  return (
    <View style={styles.post}>
      <View style={styles.thumb} onPress={() => handleClickEditPost(id)}>
        <Image
          style={styles.img}
          resizeMode="cover"
          source={{ uri: imgSource }}
        />
      </View>

      <Text style={styles.textName}>{postName}</Text>

      <View style={styles.details}>
        <View style={styles.counterWrapper}>
          {commentsCount && (
            <View style={styles.comments}>
              <ButtonIcon
                style={styles.btnIconComments}
                onPress={() => handleClickComments(id)}
              >
                <IconComments
                  style={styles.iconComments}
                  stroke={colorIcon ? "none" : "#BDBDBD"}
                  fill={colorIcon ? colorIcon : "transparent"}
                  width={24}
                  height={24}
                />
              </ButtonIcon>
              <Text
                style={[
                  styles.commentsAmount,
                  colorText && { color: colorText },
                ]}
              >
                {commentsCount}
              </Text>
            </View>
          )}

          {likesCount && (
            <View style={styles.likes}>
              <IconLike
                style={styles.iconComments}
                fill={colorIcon ? colorIcon : "#BDBDBD"}
                width={24}
                height={24}
              />
              <Text
                style={[
                  styles.commentsAmount,
                  colorText && { color: colorText },
                ]}
              >
                {likesCount}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.locationWrapper}>
          {fullLocation && (
            <View style={styles.location}>
              <IconMap
                style={styles.iconLocation}
                stroke="#BDBDBD"
                width={24}
                height={24}
              />
              <ButtonText
                style={styles.btnLocation}
                textStyle={styles.btnLocationText}
                onPress={() =>
                  navigation.navigate("Map", { location: photoLocation })
                }
              >
                {fullLocation}
              </ButtonText>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {},
  thumb: {
    maxWidth: "100%",
    maxHeight: 240,
    marginBottom: 8,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  textName: {
    marginBottom: 8,
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  counterWrapper: {
    flexDirection: "row",
    gap: 24,
  },
  comments: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  btnIconComments: {
    height: "auto",
    backgroundColor: "transparent",
  },
  iconComments: {},
  commentsAmount: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  locationWrapper: {
    flexDirection: "row",
    gap: 24,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  iconLocation: {
    flexDirection: "row",
  },
  btnLocation: {
    height: "auto",
    backgroundColor: "transparent",
  },
  btnLocationText: {
    textDecorationLine: "underline",
    color: "#212121",
  },
});

export default Post;
