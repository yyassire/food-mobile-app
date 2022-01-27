import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { addDishes, removeDishes } from "../redux/rootSlice";
import { useDispatch, useSelector } from "react-redux";
import { foods } from "../dunmyData";
export default function DishesList() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.roots.orders);
  const isChecked = (title) =>
    Boolean(orders.find((item) => item.title === title));
  const handleCheck = (food, checked) => {
    const price = Number(food.price.replace("$", ""));
    if (checked) {
      dispatch(removeDishes({ title: food.title, price }));
    } else {
      dispatch(addDishes({ food, price }));
    }
  };
  return (
    <View style={{ paddingBottom: 500 }}>
      <FlatList
        data={foods}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return (
            <View>
              <View style={styles.container}>
                <BouncyCheckbox
                  isChecked={isChecked(item.title)}
                  onPress={() => handleCheck(item, isChecked(item.title))}
                />
                <View style={styles.infos}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.desc}>{item.description} </Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
                <Image style={styles.img} source={{ uri: item.image }} />
              </View>
              <Divider
                width={0.5}
                orientation="vertical"
                style={{ marginHorizontal: 20 }}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {},
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  infos: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  desc: {
    marginVertical: 5,
    lineHeight: 20,
  },
  price: {
    fontSize: 14,
    color: "gray",
  },
  img: {
    width: 100,
    height: 80,
    resizeMode: "cover",
    borderRadius: 5,
  },
});
