import React, { useMemo } from "react";
import type {
  FieldErrorsImpl,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import type { PayrollData } from "../types/payroll";
import FieldWrapper from "./FieldWrapper";

const SituationOption: React.FC<{
  register: UseFormRegister<PayrollData>;
  watch: UseFormWatch<PayrollData>;
  id: string;
  label: string;
  description?: string | JSX.Element;
}> = ({ register, watch, id, label, description }) => {
  const _id = useMemo(() => `familySituation-${id}`, [id]);
  const checked = useMemo(
    () => watch("familySituation") === id,
    [watch("familySituation")]
  );
  console.log(id, checked);

  return (
    <div
      className={`situation__option inline bg-gradient-to-br from-pink-500 to-${
        checked ? "orange" : "cyan"
      }-400 p-3 rounded-lg cursor-pointer`}
    >
      <label htmlFor={_id}>
        <input
          {...register("familySituation", { required: true })}
          id={_id}
          value={id}
          type="radio"
          className="hidden"
        />

        <div className="situation__label__text text-xl font-bold text-center text-white cursor-pointer">
          {label}
        </div>

        {description && (
          <div className="situation__description cursor-pointer">
            {description}
          </div>
        )}
      </label>
    </div>
  );
};

const Situation: React.FC<{
  register: UseFormRegister<PayrollData>;
  watch: UseFormWatch<PayrollData>;
  errors: FieldErrorsImpl<PayrollData>;
}> = ({ register, watch, errors }) => (
  <FieldWrapper
    label={<p className="mb-3 text-lg text-center">Situación familiar</p>}
    name={"situation"}
  >
    <div className="situation__options__wrapper flex gap-3">
      <SituationOption
        register={register}
        watch={watch}
        label={"Soltero"}
        id={"soltero"}
        description={
          <p>Soltero, viudo, divorciado o separado con hijos a cargo</p>
        }
      />
      <SituationOption
        register={register}
        watch={watch}
        label={"Casado"}
        id={"casado"}
        description={
          <p>
            Casado y cuyo cónyuge no obtiene rentas superiores a 1.500 euros
            anuales
          </p>
        }
      />
      <SituationOption
        register={register}
        watch={watch}
        label={"Otros"}
        id={"otros"}
        description={
          <p>
            Otros. Soltero sin hijos, casado con o sin hijos y con cónyuge con
            rentas superiores a 1.500 euros al año
          </p>
        }
      />
    </div>

    <div className="situation__errors text-red-500">
      {errors?.familySituation && "Has de elegir alguna opción"}
    </div>
  </FieldWrapper>
);

export default Situation;
