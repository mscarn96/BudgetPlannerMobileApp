import React from "react";
import { StyleSheet } from "react-native";
import {
  ActivityIndicator,
  Button,
  Dialog,
  Portal,
  Text,
} from "react-native-paper";

interface ISubmitDialog {
  isVisible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  message: string;
  isLoading: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubmitDialog = (props: ISubmitDialog) => {
  const hideDialog = () => {
    props.setVisible(false);
    props.setIsLoggedIn(true);
  };

  return (
    <Portal>
      {props.isLoading ? (
        <ActivityIndicator size='large' />
      ) : (
        <Dialog visible={props.isVisible} onDismiss={hideDialog}>
          <Dialog.Title>{props.title}</Dialog.Title>
          <Dialog.Content>
            <Text>{props.message}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      )}
    </Portal>
  );
};

export default SubmitDialog;

const styles = StyleSheet.create({});
