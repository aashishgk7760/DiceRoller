import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import DiceOne from "./assets/dice1.png";
import DiceTwo from "./assets/dice2.png";
import DiceThree from "./assets/dice3.png";
import DiceFour from "./assets/dice4.png";
import DiceFive from "./assets/dice5.png";
import DiceSix from "./assets/dice6.png";
export default function App() {
  const [uri, setUri] = useState();
  const playButtonTapped = () => {
    let randomnumber = Math.floor(Math.random() * 6) + 1;
    switch (randomnumber) {
      case 1:
        setUri(DiceOne);
        break;
      case 2:
        setUri(DiceTwo);
        break;
      case 3:
        setUri(DiceThree);
        break;
      case 4:
        setUri(DiceFour);
        break;
      case 5:
        setUri(DiceFive);
        break;
      case 6:
        setUri(DiceSix);
        break;
      default:
        setUri(DiceOne);
        break;
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={uri}></Image>
        <TouchableOpacity onPress={playButtonTapped}>
          <Text style={styles.text}>PlayGame</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#F2A365",
    borderRadius: 5,
    textTransform: "uppercase",
    marginTop: 30,
    borderColor: "#30475E",
    borderWidth: 3,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
  },
});
