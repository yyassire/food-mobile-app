import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";

export default function Carts({ restaurants, navigation }) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.carts}
      data={restaurants}
      renderItem={({ item }) => {
        return (
          <Pressable
            onPress={() =>
              navigation.navigate("Details", {
                name: item.name,
                image: item.image_url,
                price: item.price,
                reviews: item.review_count,
                rating: item.rating,
                categories: item.categories,
              })
            }
          >
            <View style={styles.cart}>
              <Image
                style={styles.img}
                source={{
                  uri: item.image_url,
                }}
              />
              <View style={styles.infos}>
                <View style={styles.info}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.time}>30-40 ~min</Text>
                </View>
                <View style={styles.star}>
                  <Text style={styles.starText}>{item.rating}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  carts: {
    marginTop: 5,
    flex: 1,
  },
  cart: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "white",
  },
  img: {
    width: "100%",
    height: 200,
  },
  infos: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  info: {},
  name: {
    fontWeight: "700",
    fontSize: 15,
  },
  time: {
    fontSize: 12,
    color: "gray",
  },
  star: {
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    borderRadius: 20,
  },
  starText: {},
});
