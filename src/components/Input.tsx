import { ChangeEvent, useEffect, useState } from "react";
import { joinClasses } from "utils/css.utils";

export type InputProps<TData> = {
  className?: HTMLInputElement["className"];
  id?: string;
  label: string | JSX.Element | JSX.Element[];
  max?: HTMLInputElement["max"];
  min?: HTMLInputElement["min"];
  name: string;
  onChange?: (value: unknown) => void;
  required?: HTMLInputElement["required"];
  step?: HTMLInputElement["step"];
  type?: HTMLInputElement["type"];
};

export const Input = <TData extends HTMLInputElement["value"]>({
  type: inputType = "text",
  onChange,
  className = "",
  label,
  id,
  name,
  ...inputProps
}: InputProps<TData>): JSX.Element => {
  const [value, setValue] = useState<TData>();

  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    switch (inputType) {
      case "number":
      case "search":
      case "text":
        return setValue(evt.target.value as TData);
      case "checkbox":
        return setValue(evt.target.checked as unknown as TData);
    }
  };

  useEffect(() => {
    if (onChange) {
      onChange(value ?? ("" as TData));
    }
  }, [value]);

  return (
    <div className="input-container">
      {label && (
        <>
          <label id={id ?? name}>{label}:</label>
          <br />
        </>
      )}

      <input
        {...{
          ...inputProps,
          checked: !!value,
          className: joinClasses("border", className),
          id: id ?? name,
          name: name,
          onChange: onChangeHandler,
          type: inputType,
          value: value,
        }}
      />
    </div>
  );
};
