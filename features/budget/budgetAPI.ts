import configureAxios from "../../utils/configureAxios";

export interface UpdateBudgetData {
  amount: number;
}

export const fetchBalance = async () => {
  const instance = await configureAxios();

  return instance.get("/balance");
};

export const updateBalance = async (data: UpdateBudgetData) => {
  const instance = await configureAxios();

  return instance.put("/balance", data);
};

// Create/Delete calls for creating new/deleting accounts

export const createBalance = async () => {
  const instance = await configureAxios();

  return instance.post("/balance");
};

export const deleteBalance = async () => {
  const instance = await configureAxios();

  return instance.delete("/balance");
};
