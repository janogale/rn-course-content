import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ColorBox({ colorName = "", colorCode = "" }) {
  return (
    <View style={[styles.box, { backgroundColor: colorCode }]}>
      <Text style={styles.name}>{colorName}</Text>
      <Text style={styles.code}>{colorCode}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  name: {
    fontSize: 20,
    padding: 10,
    margin: 5,
  },
  code: {
    fontSize: 20,
    padding: 10,
    margin: 5,
  },
});
