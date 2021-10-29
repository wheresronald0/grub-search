import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
  },
});
export default SearchScreen;
