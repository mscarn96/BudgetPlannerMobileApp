import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import * as authAPI from "./authAPI";

export interface User {
  _id: string;
  name: string;
  email: string;
}

export type AuthData = Response & User;

interface ResponseWithError {
  status: number;
  message: string;
}

type SliceState = {
  loading: boolean;
  user?: User;
  error?: string;
};

const initialState: SliceState = {
  loading: false,
};

export const register = createAsyncThunk<
  AuthData,
  authAPI.RegisterData,
  { rejectValue: ResponseWithError }
>(`register`, async (data: authAPI.RegisterData, thunkAPI) => {
  const response = await authAPI.register(data);
  if (response.status !== 200) {
    return thunkAPI.rejectWithValue(
      (await response.json()) as ResponseWithError
    );
  }
  return (await response.json()) as AuthData;
});

export const login = createAsyncThunk<
  AuthData,
  authAPI.LoginData,
  { rejectValue: ResponseWithError }
>(`login`, async (data: authAPI.LoginData, thunkAPI) => {
  const response = await authAPI.login(data);
  if (response.status !== 200) {
    return thunkAPI.rejectWithValue(
      (await response.json()) as ResponseWithError
    );
  }
  return (await response.json()) as AuthData;
});

const authSlice = createSlice({
  name: `auth`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      (state.loading = false), (state.user = action.payload);
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload.message;
      } else {
        state.error = action.error.message;
      }
    });
    builder.addCase(register.pending, state => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      (state.loading = false), (state.user = action.payload);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload.message;
      } else {
        state.error = action.error.message;
      }
    });
    builder.addCase(login.pending, state => {
      state.loading = true;
    });
  },
});

export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
