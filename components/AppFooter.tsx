import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { stylePractice } from "../styles/styles";
type AppFooterProps = {

  footerMessage: string;
};

const AppFooter = ({footerMessage}: AppFooterProps): React.JSX.Element => {
  return (
    <View style={stylePractice.footer}>
        <Text style={stylePractice.footerText}>{footerMessage}</Text>
    </View>
  );
};

export default AppFooter;

const styles = StyleSheet.create({
  
});
