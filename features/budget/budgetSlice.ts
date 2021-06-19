import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as budgetApi from "./budgetAPI";

import { Budget } from "../../types";
import handleAsyncError, {
  ResponseWithError,
} from "../../utils/handleAsyncError";

type BudgetState = Budget;

const initialState: BudgetState = {
  balance: 0,
  history: [],
};

export const getBalance = createAsyncThunk<
  BudgetState,
  undefined,
  { rejectValue: ResponseWithError }
>(`getBalance`, async (data, thunkAPI) => {
  try {
    const response = await budgetApi.fetchBalance();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAsyncError(error));
  }
});

export const updateBalance = createAsyncThunk<
  BudgetState,
  budgetApi.UpdateBudgetData,
  { rejectValue: ResponseWithError }
>(`updateBudget`, async (data: budgetApi.UpdateBudgetData, thunkAPI) => {
  try {
    const response = await budgetApi.updateBalance(data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAsyncError(error));
  }
});

export const budgetSlice = createSlice({
  name: "budget",
  initialState: {
    ...initialState,
    loading: `idle`,
  },
  reducers: {},
});
