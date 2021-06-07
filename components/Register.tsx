import React, { useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Button, Text, TextInput } from "react-native-paper";

interface Props {
  setIsNewUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const Register = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.heading}>Budget Planner</Text>
        <TextInput
          label='Name'
          value={name}
          onChangeText={text => setName(text)}
          mode='outlined'
          style={styles.input}
        />
        <TextInput
          label='Email'
          value={email}
          onChangeText={text => setEmail(text)}
          mode='outlined'
          style={styles.input}
        />
        <TextInput
          label='Password'
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          mode='outlined'
          style={styles.input}
        />
        <TextInput
          label='RepeatedPassword'
          secureTextEntry
          value={repeatedPassword}
          onChangeText={text => setRepeatedPassword(text)}
          mode='outlined'
          style={styles.input}
        />
        <Button style={styles.button} mode='contained'>
          Log in
        </Button>
        <Button
          onTouchEnd={() => props.setIsNewUser(false)}
          mode='text'
          style={styles.button}>
          Already have an account?
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 180,
    padding: 5,
  },
  heading: {
    fontWeight: "700",
    color: "#f57c00",
    fontSize: 30,
    marginBottom: 30,
  },
  button: { marginTop: 20 },
});
