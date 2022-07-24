import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 25,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  inpParent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },

  inp: {
    height: 50,
    width: 70,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: Colors.accent500,
    fontSize: 24,
  },

  buttonsParent: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    marginTop: 100,
    alignItems: "center",
  },
});
