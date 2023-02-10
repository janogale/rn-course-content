import React from "react";

import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

function ContactCard({ name = "", navigation }) {
  //   const name = prop.name;
  //   const {name} = prop;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("ContactDetails", {
          name,
        })
      }
    >
      <View style={styles.row}>
        <View style={styles.textIcon}>
          <Text style={styles.iconText}>{name[0].toUpperCase()}</Text>
        </View>

        <Text style={[, styles.text, { color: "white" }]}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "teal",
    flex: 1,
  },
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
