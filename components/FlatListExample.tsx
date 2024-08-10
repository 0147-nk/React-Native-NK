import { StyleSheet, View, Text, FlatList } from "react-native";
import React from "react";
import { styleFlatList } from "../styles/styles";

interface UserItem {
  id: string;
  name: string;
  email: string;
}

const FlatListExample = (): React.JSX.Element => {
  const user: UserItem[] = [
    { id: "1", name: "Alice", email: "alice@example.com" },
    { id: "2", name: "Bob", email: "bob@example.com" },
    { id: "3", name: "Cara", email: "cara@example.com" },
  ];

  //create _renderItem function
  const _renderItem = ({ item }: { item: UserItem }) => {
    return (
      <View style={styleFlatList.item}>
        <Text style={styleFlatList.name}>{item.name}</Text>
        <Text style={styleFlatList.email}>{item.email}</Text>
      </View>
    );
  };

  return (
    <View style={styleFlatList.container}>
      <FlatList
        data={user} //determind data in flatlist
        renderItem={_renderItem} //create _renderItem function
        keyExtractor={(item) => item.id} //determind key for each item
      />
    </View>
  );
};

export default FlatListExample;
