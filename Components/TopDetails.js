import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function TopDetails({ route }) {
  const { image, name, reviews, rating, categories } = route.params;
  const category = categories.map((item) => item.title).join("~");
  const desc = `${category} $$ ~ ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <Image source={{ uri: image }} style={styles.img} />
      <Text style={styles.title}>{name}</Text>
      <View>
        <Text style={styles.text}>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 150,
  },
  title: {
    fontSize: 20,
    paddingVertical: 7,
    paddingLeft: 11,
    fontWeight: "700",
  },
  text: {
    paddingLeft: 11,
  },
});
