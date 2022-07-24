import { Alert, Text, TextInput, ToastAndroid, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./Style";
import { PrimaryButton } from "../../components/ui/Buttons";
import ScreensInterface from "../../interfaces/screens";
import { H1 } from "../../components/ui/Titles";

interface StartGameInterface {
  pickedHandler: (chosenNo: number) => void;
  changeScreen: (screen: ScreensInterface) => void;
}

const StartGame = ({ pickedHandler, changeScreen }: StartGameInterface) => {
  const [enteredNo, setEnteredNo] = useState("");
  const inputHandler = (eo: any) => {
    setEnteredNo(eo);
  };

  const resetNo = () => {
    setEnteredNo("");
  };

  const confirmEnteredNo = () => {
    const chosenNo = parseInt(enteredNo);

    if (isNaN(chosenNo)) {
      Alert.alert(
        "Invalid Number",
        "the number must be a number not a string",
        [{ text: "Okay", style: "destructive", onPress: resetNo }]
      );
    } else if (chosenNo < 1) {
      Alert.alert(
        "Invalid Number",
        "Please the number must be greater than 1",
        [{ text: "Okay", style: "destructive", onPress: resetNo }]
      );
    } else if (chosenNo > 99) {
      Alert.alert("Invalid Number", "Please the number must be less than 100", [
        { text: "Okay", style: "destructive", onPress: resetNo },
      ]);
    } else {
      pickedHandler(chosenNo);
      changeScreen(2);
    }
  };

  return (
    <View>
      <View style={styles.title}>
        <H1>Guess My Number</H1>
      </View>
      <View style={styles.container}>
        <View style={styles.inpParent}>
          <Text style={styles.text}>Enter a Number</Text>
          <TextInput
            style={styles.inp}
            maxLength={2}
            keyboardType="number-pad"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={inputHandler}
            value={enteredNo}
          />
        </View>
        <View style={styles.buttonsParent}>
          <PrimaryButton onPress={resetNo}>Reset</PrimaryButton>
          <PrimaryButton onPress={confirmEnteredNo}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGame;
