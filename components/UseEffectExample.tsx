import { View, Text, Button } from "react-native";
import React from "react";
import ProfileScreen from "./ProfileScreen";
import { useEffect, useState } from "react";

const UseEffectExample = (): React.JSX.Element => {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  useEffect(() => {
    console.log("use EFfect1 - Runs after every render");
  });

  useEffect(() => {
    console.log("use EFfect2 - Runs only when count1 changes");
  }, [count1]);

  useEffect(() => {
    console.log("use EFfect3 - Runs only once after the first render");
  }, []);

  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ marginTop: 50 }}>Count1: {count1}</Text>
      <Button title="Increment Count1" onPress={() => setCount1(count1 + 1)} />
      <Text>{"\n\n"}</Text>
      <Text>Count2: {count2}</Text>
      <Button title="Increment Count2" onPress={() => setCount2(count2 + 1)} />
    </View>
  );
};

export default UseEffectExample;
