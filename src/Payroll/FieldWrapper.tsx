import React from "react";
import { FieldError } from "react-hook-form";

const ERROR_MESSAGES: { [key: string]: string } = {
  required: "Este campo es obligatorio",
};

const FieldWrapper: React.FC<{
  label: string | JSX.Element;
  name: string;
  children: JSX.Element | JSX.Element[];
  errors?: FieldError;
}> = ({ label, name, children, errors }) => (
  <div className="payroll__form__field mb-6">
    <>
      <label className="payroll__form__label" htmlFor={name}>
        {label}
      </label>

      {children}

      {errors && (
        <div className="payroll__form__field__errors text-red-500">
          {ERROR_MESSAGES?.[errors.type]}
        </div>
      )}
    </>
  </div>
);

export default FieldWrapper;
