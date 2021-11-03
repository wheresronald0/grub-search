import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Restaurants = ({ result }) => {
  //console.log(result.id);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars - {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    height: 125,
    width: 200,
    borderRadius: 10,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});
export default Restaurants;
