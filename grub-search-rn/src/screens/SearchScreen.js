import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchInput from "../components/SearchInput";
import useApi from "../hooks/useApi";
import ResultsList from "../components/ResultsList";

const SearchScreen = (props) => {
  const [searching, setSearching] = useState("");
  const [searchApi, results, errorMessage] = useApi();
  //console.log(props);

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

      {errorMessage ? <Text>{errorMessage} </Text> : null}

      <Text style={styles.text}>We have found {results.length} results!</Text>
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
          navigation={props.navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Pricier, but Affordable"
          navigation={props.navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Expensive"
          navigation={props.navigation}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
  },
  text: {
    alignSelf: "center",
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
