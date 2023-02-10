import React from "react";
import { SafeAreaView, FlatList, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Card from "./components/ContactCard";

// contacts data
import { contacts } from "./data/index";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import ContactDetails from "./screens/ContactDetails";
import ContactCard from "./components/ContactCard";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Contacts"
          component={Home}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="ContactDetails" component={ContactDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
