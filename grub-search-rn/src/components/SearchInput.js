import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchInput = (props) => {
  return (
    <View style={styles.searchContainer}>
      <Feather name="search" size={40} style={styles.icon} />
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={props.searchingFor}
        onChangeText={props.onSearchChange}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={props.onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#f0eeee",
    height: 50,
    width: "90%",
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 15,
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 22,
  },
});
export default SearchInput;
