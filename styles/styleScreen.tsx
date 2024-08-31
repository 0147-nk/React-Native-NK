import { StyleSheet } from "react-native";

const styleAbout = StyleSheet.create({
    container: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    myImage: {
      width: "100%",
      height: 200,
      marginTop: 20,
    },
    myImgNetwork: {
        width: 50,
        height: 50,
        marginTop: 10,
    },
    bgImg: {
        width: "100%",
        height: "100%",
    }
  });

  const styleHome = StyleSheet.create ({
    container: {
      padding: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
    },
    postContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
    },
    postText: {
      margin: 10,
      fontSize: 16,
    },
    postContent: {
      color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา
      fontWeight: "bold",
    },  
  });
  
export {styleAbout, styleHome};  