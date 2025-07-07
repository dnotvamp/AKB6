import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f5",
        padding: 20,
      }}
    >
      {}
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 60,
          borderRightWidth: 60,
          borderBottomWidth: 120,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "red",
          marginBottom: 40,
        }}
      />

      {}
      <View
        style={{
          backgroundColor: "gray",
          paddingVertical: 25,
          paddingHorizontal: 60,
          borderRadius: 5,
          marginBottom: 40,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "white",
            letterSpacing: 1,
          }}
        >
          MUH.FADHIL AHMAD
        </Text>
      </View>

      {}
      <View
        style={{
          backgroundColor: "#3A4750",
          width: 260,
          height: 70,
          borderRadius: 35,
          justifyContent: "center",
          alignItems: "center",
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
        }}
      >
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            color: "#FFFFFF",
            letterSpacing: 1,
          }}
        >
          105841109722
        </Text>
      </View>
    </View>
  );
}