import { Alert, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import ProfileScreen from "./components/ProfileScreen";
// import UseEffectExample from './components/UseEffectExample'
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = (): React.JSX.Element => {
  const HomeStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={{ //global option for every stack
          headerStyle: { backgroundColor: "#20b2ae" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          // headerTitleAlign: "center",
        }}
        initialRouteName="Home"
      >
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "หน้าหลัก" }}
        />
        <HomeStack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: "เกี่ยวกับเรา",
          }}
        />
        <HomeStack.Screen name="CreatePost" component={CreatePostScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
