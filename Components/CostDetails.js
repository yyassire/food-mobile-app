import { View, Text } from "react-native";
import React from "react";
import CartBtn from "./CartBtn";
import CartModel from "./CartModel";

export default function CostDetails({ route, navigation }) {
  return (
    <>
      <CartBtn />
      <CartModel route={route} navigation={navigation} />
    </>
  );
}
