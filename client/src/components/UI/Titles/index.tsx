import React from "react";
import { Text } from "react-native";
import { styles } from "./Style";

export const H1 = ({ children }: any) => {
  return <Text style={styles.h1}>{children}</Text>;
};
