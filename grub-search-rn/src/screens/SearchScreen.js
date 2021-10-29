import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchInput from "../components/SearchInput";

const SearchScreen = () => {
  const [searching, setSearching] = useState("");
  return (
    <View style={styles.screen}>
      <SearchInput
        searching={searching}
        onSearchChange={(text) => setSearching(text)}
      />
      <Text style={styles.title}>Search Screen</Text>
      <Text>{searching}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    height: "100%",
  },
  title: {
    fontSize: 22,
  },
});
export default SearchScreen;
