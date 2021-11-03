import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Flatlist,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Restaurants from "./Restaurants";

const ResultsList = (props) => {
  //console.log(props.navigation);

  const list = props.results.map((listItems) => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Tile", { id: listItems.id })}
      >
        <Restaurants result={listItems} key={listItems.id} />
      </TouchableOpacity>
    );
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
