import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const serviceHomePageStyle = StyleSheet.create({
  upIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: (WIDTH * 6) / 100,
    alignSelf: "center",
  },
  goBack: {
    color: "rgba(179,179,179,1)",
    fontSize: (WIDTH * 5) / 100,
    fontFamily: "roboto-regular",
    textAlign: "center",
    alignSelf: "center",
  },
  Text: {
    color: "rgba(0,0,0,1)",
    top: WIDTH / 30,
    marginBottom: WIDTH / 30,
    fontSize: (WIDTH * 4.3) / 100,
    alignSelf: "center",
    fontFamily: "roboto-700",
  },
  rectRow: {
    top: HEIGHT / 60,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: WIDTH / 15,
  },
  rect: {
    width: 168,
    height: 120,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
  },
});
