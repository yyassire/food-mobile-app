import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { closeModel } from "../redux/rootSlice";

const CheckOutBtn = ({ route, navigation }) => {
  const data = useSelector((state) => state.roots);
  const { restaurantName, orders } = data;
  const dispatch = useDispatch();
  const handlePress = async () => {
    try {
      const colRef = collection(db, "orders");
      await addDoc(colRef, {
        items: orders,
        restaurantName: restaurantName,
        createdAt: serverTimestamp(),
      });
      dispatch(closeModel());
      navigation.navigate("Ordered");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.cartContainer}>
      <TouchableOpacity onPress={handlePress} style={styles.btn}>
        <Text style={styles.carttxt}>CheckOUT</Text>
        <Text style={styles.price}>$25.00</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // button
  cartContainer: {
    marginTop: 30,
    backgroundColor: "black",
    paddingVertical: 5,
    alignSelf: "center",
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
export default CheckOutBtn;
