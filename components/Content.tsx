import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
import { stylePractice } from "../styles/styles";

type messageType = {
  message: string;
  handleButtonClick: () => void;
  fullname: string;
};
// const Content = ({ message, fullname }: messageType): React.JSX.Element =>
const Content = ({message, handleButtonClick, fullname}: messageType): React.JSX.Element => {
  const [displayFullname, setDisplayFullname] = React.useState("");
  const handleButton = () => {
    setDisplayFullname(fullname);
    Alert.alert("Hello", `Input your fullname:\n${fullname}`);
  };
  // const handleButton = () => {
  //   setDisplayFullname(fullname);
  //   Alert.alert("Hello", `Input your fullname : ${fullname}`);
  // };
  return (
    <View>
      <Text style={stylePractice.textContent}>{message}</Text>
      <Text style={stylePractice.textContent}>{displayFullname}</Text>
      <Button title="Click ME" onPress={handleButtonClick} />
      {/* <Button title="Click ME" onPress={handleButton} /> */}
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({});
