import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import { styleAbout } from "../styles/styleScreen";

const AboutScreen = ({route}:any): React.JSX.Element => {

  const {companyName, companyID} = route.params; // <= params = get data

  return (
    <ImageBackground source={require('../assets/bg.png')} style={styleAbout.bgImg}>
      <SafeAreaView>
        <Image
          source={require("../assets/building.png")}
          resizeMode="contain"
          style={styleAbout.myImage}
        />
        <Text>
          {companyName} {companyID}
        </Text>
        <Image
          source={{ uri: "https://codingthailand.com/site/img/camera.png" }}
          style={styleAbout.myImgNetwork}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AboutScreen;
