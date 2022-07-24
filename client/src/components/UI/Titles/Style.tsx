import { StyleSheet } from "react-native";
import Colors from "../../../constants/colors";

export const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 15,
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
