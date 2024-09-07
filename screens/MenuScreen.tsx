import { View, Text } from "react-native";
import React from "react";
import { menuStyle } from "../styles/styleScreen";
import { Header, Icon, ListItem } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";

const MenuScreen = (props: any): React.JSX.Element => {
  return (
    <View>
      <Header
        barStyle="default"
        centerComponent={{
          text: "Thai-Nichi",
          style: { color: "#fff" },
        }}
        containerStyle={{ width: "100%", height: 200 }}
        placement="center"
      />
      <>
        <ListItem onPress={() => {props.navigation.navigate('HomeStack')}} bottomDivider>
          <Icon name="home" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>หน้าหลัก</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem onPress={() => {props.navigation.navigate('ProductStack')}}>
          <Icon
            name="star"
            type="material-community"
            color="grey"
          />
          <ListItem.Content >
            <ListItem.Title>สินค้า</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </>
    </View>
  );
};

export default MenuScreen;
