import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./Style";

export const PrimaryButton = ({ children, ...props }: any) => {
  return (
    <Pressable
      android_ripple={{ color: "#640233" }}
      style={styles.primary}
      {...props}
    >
      <Text style={styles.primary.text}>{children}</Text>
    </Pressable>
  );
};
