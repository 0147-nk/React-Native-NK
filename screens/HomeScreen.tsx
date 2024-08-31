import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styleHome } from "../styles/styleScreen";

const HomeScreen = ({ navigation, route }: any): React.JSX.Element => {

  const gotoAbout = () => {
    navigation.navigate("About", {
      companyName: "Thai-Nichi Institute of Technology",
      companyID: 100,
    });
  };

  const createPost = () => {
    navigation.navigate("CreatePost", {
      postText: "test"
    })
  };

  return (
    <View style={styleHome.container}>
      <Text style={styleHome.header}>HomeScreen</Text>
      <Button title="About us" onPress={gotoAbout} />
      <View style={styleHome.postContainer}>
        <Button
          title="Create post"
          onPress={() => navigation.navigate("CreatePost")}
        />
        <Text style={styleHome.postText}>
          Post:
          <Text style={styleHome.postContent}> {route.params?.post}</Text>
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
