import { StyleSheet } from "react-native";
import Colors from "../../../constants/colors";
export const styles = StyleSheet.create({
  primary: {
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    marginVertical: 8,
    width: 150,
    alignItems: "center",
    text: {
      color: "white",
      fontSize: 19,
    },
  },
});
