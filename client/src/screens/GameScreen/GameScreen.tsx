import { View, Text, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./Style";
import { H1 } from "../../components/ui/Titles";
import genRandNoBetween from "../../constants/genRandNoBetween";
import Counter from "../../components/ui/Counter";
import { PrimaryButton } from "../../components/ui/Buttons";

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({
  chosenNo,
  setScreen,
}: {
  chosenNo: number;
  setScreen: any;
}) => {
  const initialGuess = genRandNoBetween(1, 100, chosenNo);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === chosenNo) {
      setScreen(3);
    }
  }, [chosenNo, currentGuess]);

  const nextGuessHandler = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && currentGuess < chosenNo) ||
      (direction === "greater" && currentGuess > chosenNo)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        {
          text: "sorry",
          style: "cancel",
        },
      ]);

      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRand = genRandNoBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRand);
  };

  return (
    <View style={styles.container}>
      <H1>Opponent's Guess</H1>
      <Counter>{currentGuess}</Counter>
      <View>
        <Text>Higher or lower?</Text>
        <View style={styles.buttons}>
          <PrimaryButton onPress={() => nextGuessHandler("greater")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
};

export default GameScreen;
