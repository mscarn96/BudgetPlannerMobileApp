import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

const Options = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Options Screen</Text>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
