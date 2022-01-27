import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import { Divider } from "react-native-elements";
import { db } from "../firebase/firebase";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { foods } from "../dunmyData";

export default function Ordered() {
  const [lastOrder, setLastOrder] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");

  useEffect(() => {
    // firebase
    // there is a problem
    // problem solve
    // learn more about firestore
    const dataFetching = async () => {
      try {
        const colRef = collection(db, "orders");
        const q = query(colRef, orderBy("createdAt", "desc"), limit(1));
        const fetchData = await getDocs(q);
        fetchData.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data().items);
          // console.log(doc.id, " => ", doc.data().restaurantName);
          setLastOrder(doc.data().items);
          setRestaurantName(doc.data().restaurantName);
        });
      } catch (error) {
        console.log(error);
      }
    };
    dataFetching();
    // get data
  }, []);

  return (
    <SafeAreaView style={styles.orderedScreen}>
      <LottieView
        style={styles.topLogo}
        autoPlay
        speed={0.5}
        loop={false}
        source={require("../assets/animations/check-mark.json")}
      />
      <View>
        <Text style={styles.txt}>
          Your order at {restaurantName} cuisine has been placed
        </Text>
      </View>
      <ScrollView style={{ marginBottom: 200 }}>
        {lastOrder.map((food, i) => {
          return (
            <View key={i}>
              <View style={styles.foodContainer}>
                <View style={styles.infos}>
                  <Text style={styles.foodTitle}>{food.title}</Text>
                  <Text style={styles.foodDesc}>{food.description}</Text>
                  <Text style={styles.foodPrice}>{food.price}</Text>
                </View>
                <Image style={styles.foodImg} source={{ uri: food.image }} />
              </View>
              <Divider width={0.5} />
            </View>
          );
        })}
        <LottieView
          style={styles.cooking}
          autoPlay
          speed={0.5}
          loop={true}
          source={require("../assets/animations/cooking.json")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  topLogo: {
    height: 100,
    alignSelf: "center",
  },
  orderedScreen: {
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  txt: {
    fontWeight: "bold",
    fontSize: 17,
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  // food
  foodContainer: {
    flexDirection: "row",
    paddingHorizontal: 26,
    justifyContent: "space-between",
    marginVertical: 15,
  },
  infos: {
    flex: 1,
  },
  foodImg: {
    width: 100,
    borderRadius: 10,
  },
  cooking: {
    height: 100,
    alignSelf: "center",
  },
});
