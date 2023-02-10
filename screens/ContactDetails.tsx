import React from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";

// contacts data
import { contacts } from "../data/index";

export default function ContactDetails({ navigation, route }) {
  const name = route?.params?.name;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "gray" }}>
      <StatusBar barStyle={"dark-content"} />
      <View>
        <Text>{name}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text>Go Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
