import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FamilySituation, RawPayrollData } from "../types/payroll";
import FieldWrapper from "./FieldWrapper";
import useResult from "./hooks/useResult";
import Situation from "./Situation";

const PayrollSubmit: React.FC = () => (
  <div className="payroll__form__submit__container flex">
    <button
      type="submit"
      className={[
        "payroll__form__submit",
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-green-500",
        "hover:bg-gradient-to-bl",
        "focus:ring-4",
        "focus:outline-none",
        "focus:ring-blue-300",
        "dark:focus:ring-blue-800",
        "rounded-lg",
        "px-5",
        "py-2.5",
        "text-center",
        "mx-auto",
      ].join(" ")}
    >
      Calcula tu nómina
    </button>
  </div>
);

const Fieldset: React.FC<{
  name: string;
  children: JSX.Element | JSX.Element[];
}> = ({ name, children }) => (
  <fieldset className="sm:p-4 sm:border mb-3">
    <legend className="text-xl bg-white sm:p-2">{name}</legend>
    {children}
  </fieldset>
);

const Payroll: React.FC<{
  setSubmitData?: React.Dispatch<React.SetStateAction<RawPayrollData>>;
}> = ({ setSubmitData = () => {} }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
    getValues,
  } = useForm<RawPayrollData>({
    defaultValues: {
      name: "",
      familySituation: FamilySituation.SOLTERO,
    },
  });

  const onSubmitHandler: SubmitHandler<RawPayrollData> = (data) => {
    console.log(data);
    setSubmitData(data);
  };

  const formData = getValues();
  const { result } = useResult(formData);

  return (
    <div className="payroll__container mx-auto md:w-4/6 w-full p-3 bg-white rounded-lg">
      <div className="payroll">
        <form
          className="payroll__form"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <legend className="payroll__form__legend text-2xl font-bold">
            Introduce los datos que quieras estimar:
          </legend>

          {isSubmitted && (
            <div className="payroll__result__container">
              <p className="payroll__result__title">Resultados:</p>
              <div className="payroll__result">{result}</div>
            </div>
          )}

          <Fieldset name="Datos personales">
            <div className="flex flex-wrap">
              <FieldWrapper
                className="flex-1"
                name="name"
                label="Nombre:"
                errors={errors?.name}
              >
                <input
                  className="border p-2 rounded-lg m-2"
                  {...register("name")}
                  id={"name"}
                />
              </FieldWrapper>

              <FieldWrapper
                className="flex-1"
                name="salary"
                label="Salario:"
                errors={errors?.salary}
              >
                <input
                  className="border p-2 rounded-lg m-2"
                  {...register("salary", { required: true })}
                  id={"salary"}
                />
              </FieldWrapper>

              <FieldWrapper
                className="flex-1"
                name="age"
                label="Edad:"
                errors={errors?.age}
              >
                <input
                  className="border p-2 rounded-lg m-2"
                  {...register("age", { required: true })}
                  id={"age"}
                />
              </FieldWrapper>
            </div>

            <Situation {...{ register, watch, errors }} />
          </Fieldset>

          <PayrollSubmit />
        </form>
      </div>
    </div>
  );
};

export default Payroll;
