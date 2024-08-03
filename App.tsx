import { Alert, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import ProfileScreen from "./components/ProfileScreen";
// import UseEffectExample from './components/UseEffectExample'
import { stylesLogin } from "./styles/styles";
import Login from "./components/Login";

const App = (): React.JSX.Element => {
  return (
    <View>
      {/* <Text>App</Text> */}
      <ProfileScreen />
      <Login/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
