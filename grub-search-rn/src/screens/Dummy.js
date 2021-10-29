import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const DummyScreen = (props) => {
  return (
    <View>
      <Text style={styles.title}>Dummy Screen</Text>
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
export default DummyScreen;
