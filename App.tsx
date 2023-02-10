import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  FlatList,
  SectionList,
  StyleSheet,
  Text,
} from "react-native";
import ColorBox from "./components/ColorBox";

import Card from "./components/ContactCard";

// contacts data
import { contacts, sectionData, COLORS } from "./data/index";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="teal" />
      <ScrollView style={styles.container}>
        <FlatList
          data={COLORS}
          renderItem={function ({ item }) {
            return (
              <ColorBox colorName={item.colorName} colorCode={item.hexCode} />
            );
          }}
        />
        {/* <FlatList
          data={contacts}
          renderItem={function ({ item }) {
            return <Card name={item.name} />;
          }}
          keyExtractor={(item) => `${item.id}`}
        /> */}

        {/* <SectionList
          sections={sectionData}
          keyExtractor={(item, index) => `${item + index}`}
          renderItem={function ({ item }) {
            return <Card name={item} />;
          }}
          renderSectionHeader={({ section }) => (
            <Text style={{ fontSize: 30, marginVertical: 20 }}>
              {section.title}
            </Text>
          )}
        /> */}
        {/* {contacts.map((contact) => {
          return <Card name={contact.name} />;
        })} */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "white",
    flex: 1,
  },
});
