import {
  ChangeEvent,
  HTMLInputTypeAttribute,
  useEffect,
  useState,
} from "react";

type InputProps<TData> = {
  type: HTMLInputTypeAttribute;
  onChange?: (value: TData | undefined) => void;
};

export const Input = <TData extends HTMLInputElement["value"]>({
  type: inputType = "text",
  onChange,
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
      onChange(value);
    }
  }, [value]);

  return <input type={inputType} value={value} onChange={onChangeHandler} />;
};
