export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export interface Expenditure {
  _id: string;
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
  active: boolean;
  icon: string;
};

export interface Income {
  _id: string;
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
  active: boolean;
  dayPeriod: number;
};

export interface Budget {
  balance: number;
  history: Array<
    SingleExpenditure | Subscription | SingleIncome | RegularIncome
  >;
}

export interface Options {
  darkMode: boolean;
  currency: string;
}

export type AppState = { user: User; budget: Budget; options: Options };
