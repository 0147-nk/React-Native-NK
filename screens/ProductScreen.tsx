import { View, Text, Button, Alert } from "react-native";
import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
("@react-navigation/native");
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { findAllProduct } from "../Service/product-services";

const MaterialHeaderButton = (props: any) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const ProductScreen = ():React.JSX.Element => {
  const navigation = useNavigation<any>();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "หน้าหลัก",
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
    });
  }, [navigation]);

const getProducts = async () => {
  try {
    const response = await findAllProduct();
    console.log(response.data);
  } catch (error: any) {
    console.log(error.message);
  }
};

useFocusEffect(
  useCallback(() => {
    getProducts();
  }, [])
)

  return (
    <View>
      <Text>ProductScreen</Text>
    </View>
  )
}

export default ProductScreen