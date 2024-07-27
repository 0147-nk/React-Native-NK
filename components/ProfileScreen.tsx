import { Text, View, Image, Button } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles/styles"; //not necessary to add .tsx after file's name

const ProfileScreen = (): React.JSX.Element => {
  const profileIMG = require("../assets/myProfile.jpg");
  const newProfileIMG = require("../assets/newProfile.jpg");

  const [profileImg, setProfile] = useState(profileIMG);
  const [name, setName] = useState("Naiyana Norkaew");

  const handleChangeName = () => {
    setName(name == "Naiyana Norkaew" ? "Okinii" : "Naiyana Norkaew");
  };
  const handleChangeIMG = () => {
    setProfile(profileImg == profileIMG ? newProfileIMG : profileIMG);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profileImg} style={styles.profileImg} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="Change Name" onPress={handleChangeName} />
          <Text>{"\n"}</Text>
          <Button title="Change Image" onPress={handleChangeIMG} />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
