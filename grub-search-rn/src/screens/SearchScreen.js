import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchInput from "../components/SearchInput";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searching, setSearching] = useState("");
  const [results, setResults] = useState("");

  const searchApi = async () => {
    //sends promise
    const response = await yelp.get("/search", {
      params: {
        limit: 20,
        term: searching,
        location: "bradenton",
      },
    }); //will get back response.data array of objects
    setResults(response.data.businesses);
  };
  console.log(results);
  return (
    <View style={styles.screen}>
      <SearchInput
        searching={searching}
        onSearchChange={(text) => setSearching(text)}
        onSubmit={searchApi}
      />
      <Text style={styles.title}>Search Screen</Text>
      <Text>{searching}</Text>
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
