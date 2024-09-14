import {
  View,
  Text,
  Button,
  Alert,
  ListRenderItem,
  ActivityIndicator,
} from "react-native";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
("@react-navigation/native");
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { findAllProduct, findProductID } from "../Service/product-services";
import { FlatList } from "react-native-gesture-handler";
import { ListItem, Avatar, Badge } from "@rneui/base";

const MaterialHeaderButton = (props: any) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const ProductScreen = (): React.JSX.Element => {
  const navigation = useNavigation<any>();
  const [showLog, setShowLog] = useState<any>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Product",
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
      setLoading(true);
      const response = await findAllProduct();
      // console.log(JSON.stringify(response.data.data));
      setShowLog(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProducts();
    }, [])
  );

  const _renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <>
        <ListItem
          bottomDivider
          onPress={() => {
            navigation.navigate("Detail", {
              productID: item.id,
              productTitle: item.title,
            });
          }}
        >
          <Avatar source={{ uri: item.picture }} size={50} rounded />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
          <Badge value={item.view} status="success" />
        </ListItem>
      </>
    );
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={showLog}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id}
          refreshing={loading}
          onRefresh={getProducts}
        />
      )}
    </View>
  );
};

export default ProductScreen;
