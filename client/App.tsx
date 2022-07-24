import {
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Text,
} from "react-native";
import StartGame from "./src/screens/StartGame/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./src/screens/GameScreen/GameScreen";
import ScreensInterface from "./src/interfaces/screens";
import Colors from "./src/constants/colors";

export default function App() {
  const [userNo, setUserNo] = useState<number>(0);

  // 1 => start game screen
  // 2 => game screen
  // 3 => game over screen
  const [screen, setScreen] = useState<ScreensInterface>(1);

  const pickedNoHandler = (pickedNo: number) => {
    setUserNo(pickedNo);
  };

  const changeScreen = (screen: ScreensInterface) => {
    setScreen(screen);
  };

  const colors = [Colors.primary700, Colors.accent500];
  return (
    <LinearGradient colors={colors} style={styles.root}>
      <ImageBackground
        style={styles.photo}
        resizeMode="cover"
        source={require("./assets/images/background.png")}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.root}>
          {screen === 1 ? (
            <StartGame
              changeScreen={changeScreen}
              pickedHandler={pickedNoHandler}
            />
          ) : screen === 2 ? (
            <GameScreen setScreen={setScreen} chosenNo={userNo} />
          ) : (
            <Text>Game is over!</Text>
          )}
        </SafeAreaView>
      </ImageBackground>
      <StatusBar barStyle="light-content" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  photo: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
