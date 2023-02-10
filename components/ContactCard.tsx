import React from "react";

import { View, Text, StyleSheet } from "react-native";

function ContactCard({ name = "" }) {
  //   const name = prop.name;
  //   const {name} = prop;

  return (
    <View style={styles.row}>
      <View style={styles.textIcon}>
        <Text style={styles.iconText}>{name[0].toUpperCase()}</Text>
      </View>

      <Text style={[, styles.text, { color: "white" }]}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  textIcon: {
    backgroundColor: "#333",
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: 25,
    color: "#ddd",
    fontWeight: "bold",
  },

  text: {
    color: "red",
    marginLeft: 10,
    fontSize: 25,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#555",
  },
});

export default ContactCard;
