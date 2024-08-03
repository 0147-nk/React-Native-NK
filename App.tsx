import { Alert, StyleSheet, View, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
import { stylePractice } from "./styles/styles";

export default function App(): React.JSX.Element {

  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("Message from App.tsx");
  const [footerMessage, setFooterMessage] = useState(
    "Thai-Nichi Institute of Technology"
  );

  const handleButtonClick = () => {
    Alert.alert("Hello", `Input your fullname:\n${fullname}`);
  };

  useEffect(() => {
    console.log("Componenet has mounted");
  }, []);

  useEffect(() => {
    console.log(`Fullname has changed to : ${fullname}`);
  }, [fullname]); //this fucntion will run in log whenever fullname variable is changed

  return (
    <View style={stylePractice.container}>
      <AppHeader 
        fullname={fullname}
        message={message} />
      {/* <Content message={message} fullname={fullname} /> */}
      <Content message={message} handleButtonClick={handleButtonClick} />
      <AppFooter footerMessage = {footerMessage} />
      <TextInput
        style = {stylePractice.input}   
        placeholder="Enter your fullname"
        value={fullname}
        onChangeText={setFullname}
         />
    </View>
  );
}

const styles = StyleSheet.create({});
