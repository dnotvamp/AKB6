import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Entypo,
  Feather,
  MaterialCommunityIcons,
  Octicons,
  Foundation,
  SimpleLineIcons,
} from "@expo/vector-icons";

export default function IconScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MUH FADHIL AHMAD</Text>
      <View style={styles.iconGrid}>
        <Ionicons name="home" size={40} color="#3b82f6" />
        <FontAwesome name="car" size={40} color="#ef4444" />
        <MaterialIcons name="flight" size={40} color="#10b981" />
        <AntDesign name="github" size={40} color="#8b5cf6" />
        <Entypo name="rocket" size={40} color="#f59e0b" />
        <Feather name="camera" size={40} color="#14b8a6" />
        <MaterialCommunityIcons name="robot" size={40} color="#f43f5e" />
        <Octicons name="zap" size={40} color="#6366f1" />
        <Foundation name="heart" size={40} color="#ef4444" />
        <SimpleLineIcons name="ghost" size={40} color="#6b7280" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  iconGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
});
