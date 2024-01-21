import { View, Text } from "react-native";
import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import Animated from "react-native-reanimated";
const images= require("../../assets/images/background.png")





export default function WelcomeScreen() {
    const animation = useRef(null);
  const navigation = useNavigation();

    return(
        <View>
            <Image
        source={images}
        style={{ 
          position: "absolute",
          width: wp(100),
          height: hp(100),
          resizeMode: "cover",
        }}
      />

        </View>
    );
}