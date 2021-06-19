import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { SingleExpenditure, Subscription } from "../../types";
import handleAsyncError, {
  ResponseWithError,
} from "../../utils/handleAsyncError";

import * as expenditureAPI from "./expenditureAPI";

type ExpenditureData = AxiosResponse & Array<SingleExpenditure | Subscription>;

type SliceState = {
  loading: boolean;
  expenditures?: Array<SingleExpenditure | Subscription>;
  error?: string;
};

const initialState: SliceState = {
  loading: false,
};

export const loadExpenditures = createAsyncThunk<
  ExpenditureData,
  undefined,
  { rejectValue: ResponseWithError }
>(`loadExpenditures`, async (data, thunkAPI) => {
  try {
    const response = await expenditureAPI.getAllExpenditures();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAsyncError(error));
  }
});

export const addExpenditure = createAsyncThunk<
  ExpenditureData,
  expenditureAPI.CreateExpenditureData,
  { rejectValue: ResponseWithError }
>(
  `addExpenditure`,
  async (data: expenditureAPI.CreateExpenditureData, thunkAPI) => {
    try {
      const response = await expenditureAPI.createExpenditure(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(handleAsyncError(error));
    }
  }
);

export const modifyExpenditure = createAsyncThunk<
  ExpenditureData,
  expenditureAPI.UpdateExpenditureData,
  { rejectValue: ResponseWithError }
>("modifyExpenditure", async (data: expenditureAPI.UpdateExpenditureData) => {
  try {
    const response = await expenditureAPI.updateExpenditure(data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAsyncError(error));
  }
});
// todo split update data and id
