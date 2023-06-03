import React from "react";
import Svg, { Path } from "react-native-svg";

const IconArrowLeft = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.8}
        d="M20 12H4m6 6-6-6 6-6"
      />
    </Svg>
  );
};

export default IconArrowLeft;
