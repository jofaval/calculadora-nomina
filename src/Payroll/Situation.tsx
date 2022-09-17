import React, { useMemo } from "react";
import type {
  FieldErrorsImpl,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { FamilySituation, RawPayrollData } from "../types/payroll";
import FieldWrapper from "./FieldWrapper";

const FIELD_ID = "familySituation";

const SituationOption: React.FC<{
  register: UseFormRegister<RawPayrollData>;
  watch: UseFormWatch<RawPayrollData>;
  id: string;
  label: string;
  description?: string | JSX.Element;
}> = ({ register, watch, id, label, description }) => {
  const _id = useMemo(() => `${FIELD_ID}-${id}`, [id]);
  const checked = useMemo(() => watch(FIELD_ID) === id, [watch(FIELD_ID)]);
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

        <div className="situation__label__text text-xl font-bold text-center text-white select-none">
          {label}
        </div>

        {description && (
          <div className="situation__description select-none">
            {description}
          </div>
        )}
      </label>
    </div>
  );
};

const Situation: React.FC<{
  register: UseFormRegister<RawPayrollData>;
  watch: UseFormWatch<RawPayrollData>;
  errors: FieldErrorsImpl<RawPayrollData>;
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
        id={FamilySituation.SOLTERO}
        description={
          <p>Soltero, viudo, divorciado o separado con hijos a cargo</p>
        }
      />
      <SituationOption
        register={register}
        watch={watch}
        label={"Casado"}
        id={FamilySituation.CASADO}
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
        id={FamilySituation.OTROS}
        description={
          <p>
            Otros. Soltero sin hijos, casado con o sin hijos y con cónyuge con
            rentas superiores a 1.500 euros al año
          </p>
        }
      />
    </div>

    <div className="situation__errors text-red-500">
      {errors?.[FIELD_ID] && "Has de elegir alguna opción"}
    </div>
  </FieldWrapper>
);

export default Situation;
