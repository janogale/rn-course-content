import React from "react";
import { SafeAreaView, FlatList, Text, View, StatusBar } from "react-native";

// contacts data
import { contacts } from "../data/index";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "gray" }}>
      <StatusBar barStyle={"dark-content"} />
      <View>
        <Text>Contact Details</Text>
      </View>
    </SafeAreaView>
  );
}
