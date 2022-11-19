import { ChangeEvent, useEffect, useState } from "react";
import { joinClasses } from "utils/css.utils";

export type InputProps<TData> = {
  type?: HTMLInputElement["type"];
  className?: HTMLInputElement["className"];
  max?: HTMLInputElement["max"];
  min?: HTMLInputElement["min"];
  step?: HTMLInputElement["step"];
  required?: HTMLInputElement["required"];
  onChange?: (value: unknown) => void;
};
export const Input = <TData extends HTMLInputElement["value"]>({
  type: inputType = "text",
  onChange,
  className = "",
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
    <input
      {...{
        ...inputProps,
        type: inputType,
        value: value,
        checked: !!value,
        onChange: onChangeHandler,
        className: joinClasses("border", className),
      }}
    />
  );
};
