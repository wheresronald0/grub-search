import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
import ResultsList from "./ResultsList";

const RestaurantDetail = ({ navigation, route }) => {
  const [result, setResult] = useState(null);
  const { id } = route.params;

  console.log(result);

  const getBizDetails = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getBizDetails(id);
  }, []);

  if (!result) {
    return null;
  } else {
    return (
      <View style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.title}>{result.name}</Text>
          <Text style={styles.text}>{result.location.address1}</Text>
          <Text style={styles.text}>
            {result.location.city}, {result.location.state}{" "}
            {result.location.zip_code}
          </Text>
          <Text style={styles.text}>{result.phone}</Text>
          <FlatList
            horizontal
            data={result.photos}
            keyExtractor={(photos) => {
              photos;
            }}
            renderItem={({ item }) => {
              return <Image source={{ uri: item }} style={styles.image} />;
            }}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    margin: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 20,
  },
  text: {
    marginVertical: 5,
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 10,
    marginRight: 15,
    marginTop: 40,
  },
});
export default RestaurantDetail;
