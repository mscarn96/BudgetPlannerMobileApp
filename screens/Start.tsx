import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useAppSelector } from "../app/hooks";
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import Tabs from "../components/Tabs";

interface Props {}

const Start = (props: Props) => {
  const user = useAppSelector(state => state.auth.user);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <View style={styles.container}>
      {isLoggedIn && user ? (
        <Tabs />
      ) : isNewUser ? (
        <Register setIsNewUser={setIsNewUser} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LogIn setIsNewUser={setIsNewUser} setIsLoggedIn={setIsLoggedIn} />
      )}
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#e1e2eb",
  },
});
