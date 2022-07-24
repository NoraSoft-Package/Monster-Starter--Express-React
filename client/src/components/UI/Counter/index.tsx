import React from "react";
import { Text, View } from "react-native";
import { styles } from "./Style";

const Counter = ({ children }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Counter;
