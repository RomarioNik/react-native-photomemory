import React from "react";
import Svg, { Path } from "react-native-svg";

export const IconGallery = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.8}
        d="M11 11h7v7h-7v-7Zm11 0h7v7h-7v-7Zm0 11h7v7h-7v-7Zm-11 0h7v7h-7v-7Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default IconGallery;
