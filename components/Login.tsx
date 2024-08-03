import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import React from "react";
import { stylesLogin } from "../styles/styles";

const login = () => {
  return (
    <View style={stylesLogin.container}>
      <TextInput style={stylesLogin.input} placeholder="Enter Name" />
      {/* <Text>{"\n"}</Text> */}
      <TextInput style={stylesLogin.input} placeholder="Enter Email" />
      {/* <Text>{"\n"}</Text> */}
      <Button title="Submit" />
    </View>
  );
};

export default login;
