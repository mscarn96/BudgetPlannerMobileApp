export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export interface Expenditure {
  name: string;
  value: number;
  cyclic: boolean;
  createdAt: Date;
}

export type SingleExpenditure = Expenditure & {
  cyclic: false;
};

export type Subscription = Expenditure & {
  cyclic: true;
  dayPeriod: number;
  icon: string;
};

export interface Income {
  name: string;
  value: number;
  cyclic: boolean;
  createdAt: Date;
}

export type SingleIncome = Income & {
  cyclic: false;
};

export type RegularIncome = Income & {
  cyclic: true;
  dayPeriod: number;
};

export interface Budget {
  balance: number;
  incomes: Array<RegularIncome>;
  subscriptions: Array<Subscription>;
}

export interface Options {
  darkMode: boolean;
  currency: string;
}

export type AppState = { user: User; budget: Budget; options: Options };
