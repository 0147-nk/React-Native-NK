import { Alert, StyleSheet, View, Text, TextInput, Button } from "react-native";
import React from "react";
import { stylesLogin, styles } from "../styles/styles";

const login = (): React.JSX.Element => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = () => {
    if (name === "" && email === "") {
      Alert.alert("Alert", "Please Enter Name\nPlease Enter Email", 
      [
        // {text: "OK"} set text to alert btn
        {text: "OK"}
      ],);
    } else if (name === "") {
      Alert.alert("Alert", "Please Enter Name");
    } else if (email === "") {
      Alert.alert("Alert", "Please Enter Email");
    } else {
      Alert.alert("Alert", "Success");
    }
  };

  return (
    <View style = {styles.container}>
      <View style={stylesLogin.container}>
        <TextInput
          style={stylesLogin.input}
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={stylesLogin.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />
        <Button title="Submit" onPress={handleSubmit} color="#007EA7"/>
      </View>
    </View>
  );
};

export default login;
