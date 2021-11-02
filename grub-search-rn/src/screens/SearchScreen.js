import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SearchInput from "../components/SearchInput";
import useApi from "../hooks/useApi";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searching, setSearching] = useState("");
  const [searchApi, results, errorMessage] = useApi();

  //helper function
  const filterResultsByPrice = (price) => {
    //console.log(price);
    return results.filter((result) => {
      //console.log(result);
      return result.price === price;
    });
  };

  //console.log(results);
  return (
    <View style={styles.screen}>
      <SearchInput
        searchingFor={searching}
        onSearchChange={setSearching}
        onSubmit={() => searchApi(searching)}
      />
      <Text style={styles.title}>Search Screen</Text>
      {errorMessage ? <Text>{errorMessage} </Text> : null}

      <Text>We have found {results.length} results!</Text>
      <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Pricier" />
      <ResultsList results={filterResultsByPrice("$$$")} title="Expensive" />
      <ResultsList
        results={filterResultsByPrice("$$$$")}
        title="Super Expensive"
      />
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
/*
      ----
       {results.length > 0
        ? ((
            <ResultsList
              results={filterResultsByPrice("$")}
              title="Cost Effective"
            />
          ),
          (
            <ResultsList results={filterResultsByPrice("$$")} title="Pricier" />
          ),
          (
            <ResultsList
              results={filterResultsByPrice("$$$")}
              title="Expensive"
            />
          ),
          (
            <ResultsList
              results={filterResultsByPrice("$$$$")}
              title="Super Expensive"
            />
          ))
        : null}
 */
