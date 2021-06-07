import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Budget } from "../../types";

type BudgetState = Budget;

type ID = string;

const initialState: BudgetState = {
  balance: 0,
  history: [],
};

export const budgetSlice = createSlice({
  name: "budget",
  initialState: {
    ...initialState,
    loading: `idle`,
  },
  reducers: {
    budgetLoading(state, action) {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    budgetRecieved(state, action) {
      if (state.loading === "pending") {
        state.loading = "idle";
        (state.balance = action.payload.balance),
          (state.history = action.payload.history);
      }
    },
  },
});

//todo slices:
// !! budget (balance and  history )

// !! expenditures

// !! incomes

// !! user-related stuff (auth, options)
