import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./src/screens/SearchScreen";
import DummyScreen from "./src/screens/Dummy";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dummy"
          options={{ title: "Dummy Page" }}
          component={DummyScreen}
        />
        <Stack.Screen
          name="Search"
          options={{ title: "Restaurant Search" }}
          component={SearchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
