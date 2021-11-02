import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Flatlist,
  ScrollView,
} from "react-native";

import RestaurantList from "./RestaurantList";

const ResultsList = (props) => {
  const list = props.results.map((listItems) => {
    return <RestaurantList result={listItems} key={listItems.id} />;
  });
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <ScrollView horizontal>{list}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "green",
  },
});
export default ResultsList;
