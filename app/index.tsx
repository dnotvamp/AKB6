import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";

// Gambar primer
const mainImages = [
  require("../assets/images/1.jpg"),
  require("../assets/images/2.jpg"),
  require("../assets/images/3.jpg"),
  require("../assets/images/4.jpg"),
  require("../assets/images/5.jpg"),
  require("../assets/images/6.jpg"),
  require("../assets/images/7.jpg"),
  require("../assets/images/8.jpg"),
  require("../assets/images/9.jpg"),
];

// Gambar alternatif
const altImages = [
  require("../assets/images/a1.jpg"),
  require("../assets/images/a2.jpg"),
  require("../assets/images/a3.jpg"),
  require("../assets/images/a4.jpg"),
  require("../assets/images/a5.jpg"),
  require("../assets/images/a6.jpg"),
  require("../assets/images/a7.jpg"),
  require("../assets/images/a8.jpg"),
  require("../assets/images/a9.jpg"),
];

export default function HomeScreen() {
  const [states, setStates] = useState(
    Array(9).fill(0).map(() => ({ isAlt: false, scale: 1 }))
  );

  const handlePress = (index: number) => {
    setStates((prevStates) =>
      prevStates.map((state, i) => {
        if (i !== index) return state;
        if (state.scale >= 2) return state;
        const newScale = Math.min(state.scale * 1.2, 2);
        return {
          isAlt: !state.isAlt,
          scale: newScale,
        };
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar hidden />
      <View style={styles.grid}>
        {mainImages.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(index)}
            style={styles.cell}
            activeOpacity={0.8}
          >
            <Image
              source={states[index].isAlt ? altImages[index] : image}
              style={[
                styles.image,
                { transform: [{ scale: states[index].scale }] },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cell: {
    width: 110,
    height: 110,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
