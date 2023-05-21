import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  Home: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#232323",
  },
  Card: {
    width: "100%",
    height: 240,
    marginTop: 20,
  },
  CardPlace: {
    display: "flex",
    justifyContent: "flex-start",
    flex: 1,
    flexDirection: "row",
  },
  navbarClose: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    flexDirection: "row",
    height: 50,
    display: "flex",
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 30,
    justifyContent: "space-evenly",
  },
  text: {
    color: "black",
  },
  navbar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bot: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#white",
  },
  buttonShowAnoth: {
    marginLeft: 2,
    transform: [{ rotateZ: "45deg" }],
    display: "flex",
  },
  buttonShow: {
    display: "flex",
  },
  button: {
    display: "none",
  },
  avatar: {
    backgroundColor: "#FF3100",
    marginTop: 80,
    marginLeft: -150,
    display: "flex",
  },
  container: {
    flex: 1,

    justifyContent: "flex-start",
  },
});
