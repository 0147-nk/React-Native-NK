import { Alert, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import ProfileScreen from "./components/ProfileScreen";
// import UseEffectExample from './components/UseEffectExample'
import { stylesLogin } from "./styles/styles";
import Login from "./components/Login";
import FlatListExample from "./components/FlatListExample";
import FlatListBackend from "./components/FlatListBackend";

const App = (): React.JSX.Element => {
  return (
    <View>
      {/* <Text>App</Text> */}
      {/* <ProfileScreen /> */}
      {/* <Login/> */}
      {/* <FlatListExample/> */}
      <FlatListBackend/>
      
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
