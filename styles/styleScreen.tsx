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
  },
});

const styleHome = StyleSheet.create({
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

const logoStyle = StyleSheet.create({
  logo: {
    width: 70,
    height: 50,
  },
});

const menuStyle = StyleSheet.create({});

const productStyle = StyleSheet.create({});

const detailStyle = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0", // สีพื้นหลัง
  },
  listContent: {
    paddingHorizontal: 10, // การเว้นวรรคขอบซ้ายและขวาเท่ากัน
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red", // สีขาวส าหรับชื่อ
  },
  tileContainer: {
    borderRadius: 10, //ก าหนดให้มุมของ container มีความโค้งมน
    overflow: "hidden", //ก าหนดให้เนื้อหาที่อาจล้นออกจากขอบของ container ไม่แสดงผล
    marginBottom: 10, //ก าหนดระยะห่างจากขอบล่างของ container ไปยัง element ต่อไปที่อยู่ด้านล่าง
    elevation: 5, // เงาส าหรับ Android
    shadowOffset: { width: 0, height: 2 }, //ก าหนดต าแหน่งของเงาที่แสดงผล
    shadowOpacity: 0.25, //ก าหนดระดับความโปร่งแสงของเงา
    shadowRadius: 3.84, //ก าหนดรัศมีของการกระจายตัวของเงา
    margin: 5,
    // opacity: 0.5, // ความโปร่งใสของภาพ , ค่าน้อยจะโปร่งใสมาก
  },
  captionStyle: {
    fontSize: 14,
    color: "red", // สีขาวส าหรับวันที่
  },
});

export {
  styleAbout,
  styleHome,
  logoStyle,
  menuStyle,
  productStyle,
  detailStyle,
};
