import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function BottomTab() {
  const IconsList = [
    { Icon: FontAwesome, name: "home", text: "Home" },
    { Icon: FontAwesome, name: "search", text: "Browse" },
    { Icon: FontAwesome, name: "shopping-bag", text: "Grocery" },
    { Icon: FontAwesome5, name: "receipt", text: "Orders" },
    { Icon: Ionicons, name: "person-outline", text: "Account" },
  ];
  return (
    <View style={styles.BottomTab}>
      {IconsList.map((item) => {
        return (
          <TouchableOpacity key={item.name}>
            <View style={styles.container}>
              <item.Icon name={item.name} size={21} />
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  BottomTab: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 7,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
  },
});
