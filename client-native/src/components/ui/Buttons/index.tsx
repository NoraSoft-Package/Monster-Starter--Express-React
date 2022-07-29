import React from "react";
import { Pressable } from "react-native";
import { styles } from "./Style";

interface Button {
  btnHandler: () => void;
}

export const PrimaryButton = ({ btnHandler }: Button) => {
  return (
    <Pressable style={styles.primary} onPress={btnHandler}>
      Click me
    </Pressable>
  );
};
