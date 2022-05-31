import React from "react";
import { StatusBar, Platform, StyleSheet, Text, View } from "react-native";
import AppComponent from "./Screen";

export default function App() {
  return (
    <View style={styles.container}>
      <AppComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
