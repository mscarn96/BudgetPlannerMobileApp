import configureAxios from "../../utils/configureAxios";

export interface CreateIncomeData {
  name: string;
  cyclic: boolean;
  dayPeriod?: number;
  active?: number;
  value: number;
  createdAt: Date;
}

const SUB_URL = "/incomes";

export const getAllIncomes = async () => {
  const instance = await configureAxios();

  return instance.get(SUB_URL);
};

export const createIncome = async (data: CreateIncomeData) => {
  const instance = await configureAxios();

  return instance.post(SUB_URL, data);
};

export const getIncome = async (id: string) => {
  const instance = await configureAxios();

  return instance.get(`${SUB_URL}/${id}`);
};

export const updateIncome = async (
  id: string,
  data: Partial<CreateIncomeData>
) => {
  const instance = await configureAxios();

  return instance.put(`${SUB_URL}/${id}`, data);
};

export const deleteIncome = async (id: string) => {
  const instance = await configureAxios();

  return instance.delete(`${SUB_URL}/${id}`);
};
