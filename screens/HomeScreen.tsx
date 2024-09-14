import { View, Text, Button, Alert } from "react-native";
import React, { useLayoutEffect } from "react";
import { styleHome } from "../styles/styleScreen";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
("@react-navigation/native");
import AppLogo from "../components/AppLogo";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";

const MaterialHeaderButton = (props: any) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const HomeScreen = (): React.JSX.Element => {
  
  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "หน้าหลัก",
      headerTitle: () => <AppLogo />,
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => {
              // Alert.alert("Open Menu", "Hello React Native");
              navigation.openDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="logout"
            iconName="logout"
            onPress={() => {
              Alert.alert("Log out", "Close Menu");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const gotoAbout = () => {
    navigation.navigate("About", {
      companyname: "Thai Nichi Institute of tecnology",
      companyId: 100,
    });
  };

  return (
    <View style={styleHome.container}>
      <MaterialIcon name="home" size={40} color="blue" />
      <Text>HomeScreen</Text>
      <Button title="About us" onPress={gotoAbout} />
    </View>
  );
};

export default HomeScreen;
