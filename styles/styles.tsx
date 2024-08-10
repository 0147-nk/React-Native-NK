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
    marginTop: 0,
    backgroundColor: "#003249",
    borderRadius: 10,
    elevation: 3,
    width: "100%",
  },
  input: {
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#f9f9f9",
  },
});

const styleFlatList = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
  },
});
const styleFlatListBackend = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});

const styleNewApps = StyleSheet.create({
  container: {
    backgroundColor: "#224870",
    padding: 16,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  card: {
    backgroundColor: "#4EA5D9",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  headline: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "white",
  },
  date: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#fff",
  },
});

export {
  styles,
  stylePractice,
  stylesLogin,
  styleFlatList,
  styleFlatListBackend,
  styleNewApps,
};
