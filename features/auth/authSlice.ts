import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { RootState } from "../../app/store";
import { User } from "../../types";
import { storeToken } from "../../utils/asyncStorage";
import handleAsyncError, {
  ResponseWithError,
} from "../../utils/handleAsyncError";
import * as authAPI from "./authAPI";

export type AuthData = AxiosResponse & User;

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
  try {
    const response = await authAPI.register(data);
    storeToken(response.headers.authorization);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAsyncError(error));
  }
});

export const login = createAsyncThunk<
  AuthData,
  authAPI.LoginData,
  { rejectValue: ResponseWithError }
>(`login`, async (data: authAPI.LoginData, thunkAPI) => {
  try {
    const response = await authAPI.login(data);
    storeToken(response.headers.authorization);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAsyncError(error));
  }
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
