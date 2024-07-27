import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      padding: 20,
      borderBlockColor: "#00457a", //change bg color to navy blue
    },
  
    profileImg: {
      borderRadius: 50,
      width: 100,
      height: 100,
      marginRight: 20,
    },
  
    profileContainer: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      padding: 20,
      borderRadius: 10,
      backgroundColor: "white",
      elevation: 5, 
      marginTop: 50,
    },
  
    profileName: {
      fontSize: 22,
      color: "#75a8d1",
      fontWeight: "bold",
      paddingLeft: 7,
    },
})

export {styles};