import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModel } from "../redux/rootSlice";

export default function CartBtn() {
  const data = useSelector((state) => state.roots);
  const { total, orders } = data;
  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(openModel());
  };
  return (
    <>
      {orders.length ? (
        <View style={styles.cartContainer}>
          <TouchableOpacity style={styles.btn} onPress={handlePress}>
            <Text style={styles.carttxt}>View Cart</Text>
            <Text style={styles.price}>${total}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  cartContainer: {
    backgroundColor: "black",
    position: "absolute",
    top: 510,
    right: 50,
    left: 50,
    zIndex: 99,
    paddingVertical: 5,
    width: 250,
    borderRadius: 20,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  carttxt: {
    color: "white",
    fontSize: 20,
  },
  price: {
    color: "white",
    marginLeft: 20,
  },
});
