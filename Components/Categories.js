import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { items } from "../dunmyData";

export default function Categories() {
  return (
    <View style={styles.containers}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item) => {
          return (
            <View key={item.text} style={styles.container}>
              <Image style={styles.img} source={item.image} />
              <Text style={styles.text}>{item.text}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    marginTop: 5,
    padding: 10,
    backgroundColor: "white",
  },
  container: {
    marginRight: 15,
    alignItems: "center",
  },

  img: {
    width: 40,
    height: 35,
    resizeMode: "contain",
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
});
