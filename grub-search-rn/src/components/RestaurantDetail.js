import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const RestaurantDetail = ({ navigation, route }) => {
  const { id } = route.params;
  console.log(id);
  return (
    <View>
      <Text style={styles.title}>Tile</Text>
      <Button
        title="To Search Screen"
        onPress={() => props.navigation.navigate("Search")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
  },
});
export default RestaurantDetail;
