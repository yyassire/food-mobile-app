import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function SearchBar({ setCity }) {
  return (
    <View style={styles.searchBar}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyDPZ9M6cL1gL8CqSqKXXQYFKgCtSN4bCoc" }}
        placeholder="Search..."
        onPress={(data) => {
          setCity(data.description.split(",")[0]);
        }}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
            paddingVertical: 0,
          },
          textInputContainer: {
            padding: 0,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#eee",
            borderRadius: 50,
            marginRight: 10,
          },
        }}
        renderLeftButton={() => {
          return (
            <View style={{ marginLeft: 10 }}>
              <Ionicons name="location" size={22} />
            </View>
          );
        }}
        renderRightButton={() => {
          return (
            <View style={styles.clock}>
              <FontAwesome5 style={{ marginRight: 5 }} name="clock" size={11} />
              <Text>Search</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    marginTop: 10,
  },
  clock: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 7,
    borderRadius: 20,
    marginRight: 10,
  },
});
