import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { useSelector } from "react-redux";
import CheckOutBtn from "../CustomComponents/CheckOutBtn";

const ModelContent = ({ route, navigation }) => {
  const data = useSelector((state) => state.roots);
  const { orders, total, restaurantName } = data;
  return (
    <View style={styles.modelContent}>
      <View style={styles.modalCheckoutContainer}>
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        {/* MY ORDERS */}
        {orders.map((restaurant) => {
          return (
            <View key={restaurant.title}>
              <View style={styles.food}>
                <Text>{restaurant.title}</Text>
                <Text>{restaurant.price}</Text>
              </View>
              <Divider width={0.5} />
            </View>
          );
        })}
        <View style={styles.totalContainer}>
          <Text style={styles.subTotal}>Subtotal</Text>
          <Text style={styles.numb}>${total}</Text>
        </View>
        <CheckOutBtn route={route} navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modelContent: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalCheckoutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 400,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  food: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subTotal: {
    fontWeight: "700",
    fontSize: 20,
  },
});
export default ModelContent;
