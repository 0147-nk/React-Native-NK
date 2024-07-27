import { StyleSheet, View } from "react-native";

import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";

export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <AppHeader
        fullname="Naiyana Norkaew"
        message="This message from App.tsx"
      />
      <Content message="Message from App.tsx" fullname="Naiyana Norkaew" />
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
});
