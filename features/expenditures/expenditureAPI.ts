import configureAxios from "../../utils/configureAxios";

export interface CreateExpenditureData {
  name: string;
  cyclic: boolean;
  dayPeriod?: number;
  active?: number;
  value: number;
  createdAt: Date;
}

export type UpdateExpenditureData = Partial<CreateExpenditureData>;

const SUB_URL = "/expenditures";

export const getAllExpenditures = async () => {
  const instance = await configureAxios();

  return instance.get(SUB_URL);
};

export const createExpenditure = async (data: CreateExpenditureData) => {
  const instance = await configureAxios();

  return instance.post(SUB_URL, data);
};

export const getExpenditure = async (id: string) => {
  const instance = await configureAxios();

  return instance.get(`${SUB_URL}/${id}`);
};

export const updateExpenditure = async (
  data: UpdateExpenditureData,
  id: string
) => {
  const instance = await configureAxios();

  return instance.put(`${SUB_URL}/${id}`, data);
};

export const deleteExpenditure = async (id: string) => {
  const instance = await configureAxios();

  return instance.delete(`${SUB_URL}/${id}`);
};
