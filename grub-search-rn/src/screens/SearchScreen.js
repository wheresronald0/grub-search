import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchInput from "../components/SearchInput";
import useApi from "../hooks/useApi";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchingIt, setSearching] = useState("");
  const [searchApi, results, errorMessage] = useApi();

  console.log(results);

  return (
    <View style={styles.screen}>
      <SearchInput
        searchingFor={searchingIt}
        onSearchChange={setSearching}
        onSubmit={() => searchApi(searchingIt)}
      />
      <Text style={styles.title}>Search Screen</Text>
      {errorMessage ? <Text>{errorMessage} </Text> : null}
      <Text>We have found {results.length} results!</Text>
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
