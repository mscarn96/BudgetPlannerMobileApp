import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

const Creator = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Creator Screen</Text>
    </View>
  );
};

export default Creator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
