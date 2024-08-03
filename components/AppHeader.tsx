import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { stylePractice } from "../styles/styles";

type AppHeaderProps = {
  fullname: string;
  message: string;
};

const AppHeader = ({fullname, message}: AppHeaderProps): React.JSX.Element => {
  return (
    <View style={stylePractice.header}>
      <Text>Input your Fullname : {fullname}</Text>
      {/* <Text>{fullname}</Text> */}
      <Text>{message}</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  
});
