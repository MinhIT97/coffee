import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Homes from './navigation/BottomTabNavigator';


export default function App() {
  return <Homes />
    ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
