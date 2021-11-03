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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {list}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});
export default ResultsList;
