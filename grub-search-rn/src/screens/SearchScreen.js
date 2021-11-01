import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchInput from "../components/SearchInput";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searching, setSearching] = useState("");
  const [results, setResults] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      //sends promise
      const response = await yelp.get("/search", {
        params: {
          limit: 20,
          term: searching,
          location: "Sarasota",
        },
      }); //will get back response.data array of objects
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Opps, something went wrong!");
    }
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
