export enum FamilySituation {
  SOLTERO = "soltero",
  CASADO = "casado",
  OTROS = "otros",
}

export type RawPayrollData = {
  name: string;
  salary: string;
  age: string;
  familySituation: FamilySituation;
};

export type PayrollData = {
  name: string;
  salary: number;
  age: number;
  familySituation: FamilySituation;
};
