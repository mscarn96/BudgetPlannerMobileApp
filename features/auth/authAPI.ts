import axios from "axios";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

const url = process.env.API_URL;

export const register = async (data: RegisterData) => {
  return axios.post(`${url}/auth/register`, data);
};

export const login = async (data: LoginData) => {
  const response = await axios.post(`${url}/auth/login`, data);
  return response;
};
