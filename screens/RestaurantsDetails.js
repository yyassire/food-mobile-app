import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import TopDetails from "../Components/TopDetails";
import { Divider } from "react-native-elements";
import DishesList from "../Components/DishesList";
import CostDetails from "../Components/CostDetails";
import { useDispatch } from "react-redux";
import { addRestaurantName } from "../redux/rootSlice";

export default function RestaurantsDetails({ route, navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addRestaurantName(route.params.name));
  }, []);
  return (
    <View>
      <TopDetails route={route} />
      <Divider width={0.5} style={styles.divider} />
      <DishesList />
      <CostDetails route={route} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    marginVertical: 20,
  },
});
