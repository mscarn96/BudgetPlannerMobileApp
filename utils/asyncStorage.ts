import AsyncStorage from "@react-native-community/async-storage";

export const storeToken = async (token: string) => {
  try {
    await AsyncStorage.setItem("authorization", token);
    console.log("Token stored");
  } catch (error) {
    console.error(error);
  }
};

export const getToken = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("authorization");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(error);
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("authorization");
  } catch (error) {
    console.error(error);
  }
};
