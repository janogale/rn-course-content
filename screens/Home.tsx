import React from "react";
import { SafeAreaView, FlatList, Text, View, StatusBar } from "react-native";
import Card from "../components/ContactCard";

// contacts data
import { contacts } from "../data/index";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "gray" }}>
      <StatusBar barStyle={"dark-content"} />
      <FlatList
        data={contacts}
        renderItem={function ({ item }) {
          return <Card name={item.name} navigation={navigation} />;
        }}
        keyExtractor={(item) => `${item.id}`}
      />
    </SafeAreaView>
  );
}
