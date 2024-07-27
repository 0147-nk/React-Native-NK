import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      padding: 20,
      //backgroundColor: "#00457a", //change bg color to navy blue
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
      backgroundColor: "#003249",
      elevation: 5, 
      marginTop: 50,
    },
  
    profileName: {
      fontSize: 22,
      color: "#CCDBDC",
      fontWeight: "bold",
      paddingLeft: 10,
    },

    btn: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
    },
})

export {styles};