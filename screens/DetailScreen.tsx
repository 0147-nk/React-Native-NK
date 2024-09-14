import { View, Text, Dimensions } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ActivityIndicator, ListRenderItem } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { findProductID } from "../Service/product-services";
import { ListItem } from "@rneui/base";
import { detailStyle } from "../styles/styleScreen";
import { Tile } from "@rneui/themed";

const DetailScreen = (): React.JSX.Element => {
  const [showLog, setShowLog] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<Boolean>(false);
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { productID, productTitle } = route.params as {
    productID: string;
    productTitle: string;
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: productTitle,
    });
  }, [navigation, route]);

  const getProductsID = async () => {
    try {
      setLoading(true);
      const response = await findProductID(productID);
      console.log(JSON.stringify(response.data.data));
      setShowLog(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getProductsID();
  }, []);

  const _renderItem: ListRenderItem<any> = ({ item }) => (
    <>
      <Tile
        imageSrc={{
          uri: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/img_2915.JPG",
          cache: "force-cache",
        }}
        title={item.ch_title}
        titleStyle={detailStyle.titleStyle}
        containerStyle={detailStyle.tileContainer}
        caption={item.ch_dateadd}
        captionStyle={detailStyle.captionStyle}
        featured
        activeOpacity={0.9}
        width={Dimensions.get("screen").width - 20} // ลบขอบเล็กน้อยทั้งสองข้าง
      />
    </>
  );

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={showLog}
          renderItem={_renderItem}
          keyExtractor={(item) => item.ch_id}
          refreshing={loading}
          onRefresh={getProductsID}
          contentContainerStyle={detailStyle.tileContainer}
        />
      )}
    </View>
  );
};
export default DetailScreen;
