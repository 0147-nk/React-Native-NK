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
});

const stylePractice = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F7F4",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
  header: {
    backgroundColor: "#99E1D9",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    marginTop: 100,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffff",
  },

  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },
  footer: {
    backgroundColor: "#f8f8f8",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContent: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
    paddingLeft: 100,
    paddingRight: 100,
    justifyContent: "center",
    borderColor: "gray",
    backgroundColor: "white",
    textAlign: "center",
  },
});

const stylesLogin = StyleSheet.create({ 
  container: { 
    justifyContent: "center", 
    padding: 20, 
    marginTop: 35, 
    backgroundColor: '#ffffff', // ตงคาสพนหลงเปนสขาว 
    borderRadius: 10, // เพมความมนใหกบขอบคอนเทนเนอร 
    elevation: 3, // เพมเงาใหกบคอนเทนเนอร (เฉพาะ Android) 
    width: '100%', // ตงความกวางของ container ให้เต็มหน้าจอ 
  }, 
  input: { 
    height: 45, // เพมความสงของ TextInput 
    borderColor: "gray", // เปลยนสขอบเปนสเทาออน 
    borderWidth: 1,  
    borderRadius: 8, // เพมความมนใหกบขอบ TextInput 
    marginBottom: 15, // เพมระยะหางดานลางระหวาง TextInput 
    paddingHorizontal: 15, // เพมระยะหางภายใน TextInput 
    backgroundColor: "#f9f9f9", // ตงคาสพนหลงของ TextInput 
  },
}); 
 
export { styles, stylePractice, stylesLogin };
