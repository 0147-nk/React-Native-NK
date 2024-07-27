import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {styles} from "../styles/styles"

const ProfileScreen = (): React.JSX.Element => {
  const profileImg = require("../assets/myProfile.jpg");

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profileImg} style={styles.profileImg} />
        <Text style = {styles.profileName}>Naiyana Norkaew</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
