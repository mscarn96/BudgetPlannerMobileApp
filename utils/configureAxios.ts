import axios from "axios";
import { getToken } from "./asyncStorage";

const url = process.env.API_URL;

const configureAxios = async () => {
  const instance = axios.create({
    baseURL: `${url}`,
  });

  const token = await getToken();

  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return instance;
};

export default configureAxios;
