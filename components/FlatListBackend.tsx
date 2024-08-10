import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styleFlatList, styleFlatListBackend } from "../styles/styles";

interface user {
  id: number;
  name: string;
  email: string;
}

const FlatListBackend = () => {
  //define state for collecting user data and loading status
  const [data, setData] = useState<user[]>([]);
  const [loading, setLoading] = useState(true);

  //define useEffect for calling data from API when component is mounted
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []); //[] = use only first time running

  //_renderitem fucntion for Flatlist
  const _renderItem = ({ item }: { item: user }) => {
    return (
      <View style={styleFlatListBackend.item}>
        <Text style={styleFlatListBackend.name}>{item.name}</Text>
        <Text style={styleFlatListBackend.email}>{item.email}</Text>
      </View>
    );
  };

  return (
    <View style = {styleFlatListBackend.container}>
      {loading? (<ActivityIndicator size="large" color="red"/>) : 
      <FlatList 
        data = {data}
        renderItem = {_renderItem} 
        keyExtractor = {item => item.id.toString()}/>
      }
    </View>
  );
};

export default FlatListBackend;
