import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/1.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Black Tshirt</Text>
        <Text style={styles.price}>$100</Text>
        <View style={styles.userContaier}>
          <ListItem
            image={require("../assets/aak.png")}
            title="noni"
            subtitle="5 Listning"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,

    alignItems: "left",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContaier: {
    marginVertical: 20,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
export default ListingDetailsScreen;
