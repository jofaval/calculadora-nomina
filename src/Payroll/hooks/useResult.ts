import { useMemo } from "react";
import { RawPayrollData } from "types/payroll";

const useResult = (rawData: RawPayrollData): { result: number } => {
  const data = useMemo(() => {
    const parsedData = { ...rawData };
    return parsedData;
  }, [rawData]);

  const result = useMemo(() => {
    let salary = Number(data?.salary);
    return salary;
  }, [data]);

  return { result };
};

export default useResult;
