import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import Categories from "../Components/Categories";
import Carts from "../Components/Carts";
import axios from "axios";
import BottomTab from "../Components/BottomTab";

export default function Home({ navigation }) {
  const [restaurants, setRestaurants] = useState([]);
  const [city, setCity] = useState("bursa");
  const API_KEY =
    "HjoyeR1ZdNut4RM7NctZiysJa6axv30drRfTNDLeufGhLpFQmx_q8qCWQeM_Z8atVi1_puEDnoCMUcuvO0-K5rltMzodhCWB7-9FFY9tOnwIZgImF3wUfWUa9SjtYXYx";
  useEffect(() => {
    // get the required restaurants
    const fetchRestaurants = async () => {
      const data = await axios.get(
        `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`,
        { headers: { Authorization: `Bearer ${API_KEY}` } }
      );
      setRestaurants(data.data.businesses);
    };
    fetchRestaurants();
  }, [city]);

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.headers}>
        <SearchBar setCity={setCity} />
      </View>
      <Categories />
      <Carts restaurants={restaurants} navigation={navigation} />
      <BottomTab />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headers: {
    backgroundColor: "white",
    padding: 15,
  },
  droidSafeArea: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
